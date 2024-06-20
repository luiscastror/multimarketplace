import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

declare var WidgetCheckout: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {


  id_store!: string;
  loading: boolean = true;
  order: any = {};
  index!: number;
  telefono: string = '';

  business: any = {};

  form = new FormGroup({
    Identificacion: new FormControl('', Validators.required),
    Nombres: new FormControl('', Validators.required),
    Correo: new FormControl('', [Validators.email]),
    Telefono: new FormControl('', Validators.required),

    Departamento: new FormControl('', Validators.required),
    Ciudad: new FormControl('', Validators.required),
    Direccion: new FormControl('', Validators.required),
    DireccionAdicional: new FormControl(''),

    Metodo: new FormControl('entrega', Validators.required),

    Orden: new FormControl(''),
  });

  constructor(
    private ruta: ActivatedRoute,
    public MainService: MainService,
    private router: Router,

  ) {
    super()

    if (this.ruta.snapshot.params && this.ruta.snapshot.params.id) {
      this.id_store = this.ruta.snapshot.params.id;
      this.index = this.ruta.snapshot.params.index;
    }

  }

  ngOnInit(): void {
    this.loading = true;
    if (this.ruta.snapshot.params && this.ruta.snapshot.params.id) {
      this.loadOrder();
    }
  }

  loadOrder() {
    this.order = this.MainService.CartService.listCart.filter((business: any) => business.TiendaId == this.id_store)[0]
    console.log(this.order);
    this.form.patchValue({
      Orden: this.order
    })
    console.log(this.form.value)
    if (this.MainService.AuthService.isAuth()) {
      this.form.patchValue(this.MainService.AuthService.dataUser)
    }
    this.MainService.ApiService.get('/tiendas/' + this.id_store).subscribe((resp: any) => {
      this.business = resp;
      this.loading = false;
    })
  }

  sendNotification(order: any, userName: string) {
    const formatNumber = (num: number) => num.toLocaleString();
    const totalCompra = order.items.reduce((total: number, item: { Cantidad: number; Valor: number; Descuento: number }) => {
      const itemTotal = item.Cantidad * item.Valor;
      const itemDescuento = itemTotal * (item.Descuento / 100);
      return total + (itemTotal - itemDescuento);
    }, 0);
    let productsList = order.items.map((item: { Descripcion: string; Cantidad: number; Valor: number; Descuento: number }, index: number) => {
      const itemTotal = item.Cantidad * item.Valor;
      const itemDescuento = itemTotal * (item.Descuento / 100);
      const itemPrecioFinal = itemTotal - itemDescuento;
      return `${index + 1}) ${item.Descripcion.trim()} * ${item.Cantidad}\nPrecio Unitario: $${formatNumber(item.Valor)}\n${item.Descuento > 0 ? 'Descuento: ' + item.Descuento + '% Dto' : ''}\n${item.Descuento > 0 ? 'Precio Total: $' + formatNumber(itemPrecioFinal) : ''}`;
    }).join('\n');
    const payloadWhatsapp = {
      body: `💰!\n\nHola *${order.Tienda}* 👋\n\nTienes un nuevo pedido en Quillavende 🤑\n\nLista de productos:\n${productsList}\n\nTotal de la compra: $${formatNumber(totalCompra)}`,
      to: "3023984726"
    };

    const payloadWhatsapp2 = {
      body: `🎉 ¡Hemos recibido tu pedido de: *${order.Tienda}* 💰!\n\n Total del pedido: $${formatNumber(totalCompra)}\n Puedes ver tu pedido aqui:`,
      to: this.MainService.AuthService.dataUser.Telefono
    };
    this.MainService.NotificationService.sendNotificationPOS(payloadWhatsapp).subscribe((res) => {
      console.log('Notificación enviada:', res);
    }, (error) => {
      this.MainService.SnackbarService.show(error);
    });
    this.MainService.NotificationService.sendNotificationPOS(payloadWhatsapp2).subscribe((res) => {
      console.log('Notificación enviada:', res);
    }, (error) => {
      this.MainService.SnackbarService.show(error);
    });
  }


  changeCart() {
    this.MainService.CartService.updateCart();
  }


  ped: any = {};
  idPed: string = '';
  submit() {
    this.MainService.ApiService.post('/admin/pedidos/', this.form.value).subscribe((resp: any) => {
      if (this.form.controls["Metodo"].value == 'linea') {
        const referencia = this.id_store + '' + Number(new Date());
        const checkout = new WidgetCheckout({
          currency: 'COP',
          amountInCents: this.form.controls["Orden"].value["total"] + '00',
          reference: resp.Id,
          // publicKey: 'pub_test_QpcsOqMKJM29BMr0nllzxJpKgdcf2YHg',
          publicKey: this.business.Tienda.PublicKey,
          signature: {
            // integrity: 'test_integrity_9VRcLcgfnX7x1aO6Q7aYEyxhZMXCFxiN'
            // integrity: 'prod_integrity_l7juVOtVvUb1Jf2uKN3tGknFcsYzo4aQ'
            integrity: this.business.Tienda.Signature,
          },
          redirectUrl: 'https://quillaemprende.com', // Opcional
          // expirationTime: '2023-06-09T20:28:50.000Z', // Opcional
          // taxInCents: { // Opcional
          //   vat: 1900,
          //   consumption: 800
          // },
          customerData: { // Opcional
            email: this.form.controls["Correo"].value,
            fullName: this.form.controls["Nombres"].value,
            phoneNumber: this.form.controls["Telefono"].value,
            phoneNumberPrefix: '+57',
            legalId: this.form.controls["Identificacion"].value,
            legalIdType: 'CC'
          },
          shippingAddress: { // Opcional
            addressLine1: this.form.controls["Direccion"].value,
            city: this.form.controls["Ciudad"].value,
            phoneNumber: this.form.controls["Telefono"].value,
            region: this.form.controls["Departamento"].value,
            country: "CO"
          }
        })
        checkout.open(function (result: any) {
          var transaction = result.transaction;
        });
      }

      if (this.form.controls["Metodo"].value == 'entrega') {
        console.log('entro al de metodo');
        // this.MainService.SnackbarService.show("pedido hecho correctamente");
        this.ped = this.form.value;
        this.idPed = resp.Id;
        console.log(this.idPed, 'IdStore', this.id_store);
        this.router.navigate(['/order-info/' + this.id_store + '/' + this.idPed]);
      }

      //this.MainService.CartService.listCart[businees].items.splice(item, 1);

      const remover = () => {
        //this.MainService.SnackbarService.show("Producto elminado correctamente");
        this.MainService.CartService.listCart.splice(this.index, 1);
        this.changeCart();
      }
      remover();
      this.sendNotification(this.order, this.form.get('Nombres')?.value);
    })
  }



}
