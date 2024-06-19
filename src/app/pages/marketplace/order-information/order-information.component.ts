import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../../../services/main.service';
import { BaseComponent } from 'src/app/base';

@Component({
  selector: 'app-product-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent extends BaseComponent implements OnInit {

  idStore = this.ruta.snapshot.params.idStore;
  id = this.ruta.snapshot.params.id;


  constructor(
    private ruta: ActivatedRoute,
    public MainService: MainService

  ) { super() }

  ngOnInit(): void {
    //console.log(this.id, 'idStore', this.idStore);
    this.loadPed();
  }

  //Estado del pedido Entregado y estado del pago pagado

  statePed: string = '';
  statePay: string = '';
  resena: string = '';
  calificacion!: number;
  showRating: boolean = false;
  showCalificacion: boolean = false;

  pedido: any = {};
  loadPed() {
    this.MainService.ApiService.get('/admin/pedidos/' + this.idStore + '/' + this.id).subscribe((resp: any) => {
      this.pedido = resp;
      this.statePed = resp.EstadoPedido;
      this.statePay = resp.Estado;
      this.calificacion = resp.Calificacion;
      this.resena = resp.Reseña;
      //this.calificacion !== null ? this.showRating2 = false : this.showRating2 = true;
      this.statePay == 'ACT' && this.statePed == 'RECIBIDO' && this.calificacion == null ? this.showRating = true : this.showRating = false;
      this.calificacion !== null ? this.showCalificacion = true : this.showCalificacion = false;
      // console.log('La calificacion es:', this.calificacion);
      // console.log(this.reseña);
    })
  }

  rating!: number;
  setRating(val: number) {
    this.rating = val;
    console.log(this.rating);
  }

  description: string = '';
  setDescription(description: string) {
    this.description = description;
  }

  sendRating() {
    if (this.rating !== null) {
      this.MainService.ApiService.post('/pedidos/' + this.idStore + '/' + this.id, {
        "Reseña": this.description,
        "Calificacion": this.rating
      }).subscribe((resp: any) => {
        this.loadPed();
        console.log(resp);
        this.rating === null;
      },
        (error) => {
          this.MainService.SnackbarService.show('Error' + error);
        })
    } else {
      this.MainService.SnackbarService.show('Calificación obligatoria');

    }
  }



}
