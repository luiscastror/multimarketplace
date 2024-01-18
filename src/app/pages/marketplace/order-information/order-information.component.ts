import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent implements OnInit {

  idStore = this.ruta.snapshot.params.idStore;
  id = this.ruta.snapshot.params.id;


  constructor(
    private ruta: ActivatedRoute,
    public MainService: MainService

  ) { }

  ngOnInit(): void {
    //console.log(this.id, 'idStore', this.idStore);
    this.loadPed();
  }

  //Estado del pedido Entregado y estado del pago pagado

  statePed: string = '';
  statePay: string = '';
  showRating: boolean = true;
  calificacion!: number;

  pedido: any = {};
  loadPed() {
    this.MainService.ApiService.get('/admin/pedidos/' + this.idStore + '/' + this.id).subscribe((resp: any) => {
      this.pedido = resp;
      this.statePed = resp.EstadoPedido;
      this.statePay = resp.Estado;
      this.calificacion = resp.Calificacion;
      if (this.statePay == 'ACT' && this.statePed == 'RECIBIDO' && this.calificacion !== null) this.showRating = false;
      console.log('Se encuentra en', this.showRating);
      console.log(this.pedido);
    })
  }

  sendRating() {
    this.MainService.ApiService.post('/pedidos/' + this.idStore + '/' + this.id, {
      "Reseña": "comentario",
      "Calificacion": this.rating
    }).subscribe((resp: any) => {
      console.log(resp);
    })
  }

  rating!: number;
  setRating(val: number) {
    this.rating = val;
    console.log(this.rating);
  }

}
