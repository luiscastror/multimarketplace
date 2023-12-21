import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

declare var WidgetCheckout: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  id_store!: string;
  loading: boolean = true;
  order: any = {};

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

    Metodo: new FormControl('linea', Validators.required),

    Orden: new FormControl(''),
  });

  constructor(
    private ruta: ActivatedRoute,
    public MainService: MainService
  ) {

    if (this.ruta.snapshot.params && this.ruta.snapshot.params.id) {
      this.id_store = this.ruta.snapshot.params.id;
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

    this.form.patchValue({
      Orden: this.order
    })

    if (this.MainService.AuthService.isAuth()) {
      this.form.patchValue(this.MainService.AuthService.dataUser)
    }

    this.MainService.ApiService.get('/tiendas/' + this.id_store).subscribe((resp: any) => {
      this.business = resp;
      this.loading = false;
    })

  }


  submit() {


    this.MainService.ApiService.post('/admin/pedidos/', this.form.value).subscribe((resp: any) => {
      console.log(resp)
    })

    const referencia = this.id_store + '' + Number(new Date());

    const checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: this.form.controls["Orden"].value["total"] + '00',
      reference: referencia,
      // publicKey: 'pub_test_QpcsOqMKJM29BMr0nllzxJpKgdcf2YHg',
      publicKey: 'pub_prod_GFgqWv5ohczqTOsrO7xi9bK9HpYBFkCE',
      signature: {
        // integrity: 'test_integrity_9VRcLcgfnX7x1aO6Q7aYEyxhZMXCFxiN'
        integrity: 'prod_integrity_l7juVOtVvUb1Jf2uKN3tGknFcsYzo4aQ'
      },
      redirectUrl: 'https://vivesucre.com', // Opcional
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
      console.log('Transaction ID: ', transaction.id);
      console.log('Transaction object: ', transaction);
    });

  }



}
