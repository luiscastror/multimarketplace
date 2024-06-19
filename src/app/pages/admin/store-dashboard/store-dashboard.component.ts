import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-dashboard',
  templateUrl: './store-dashboard.component.html',
  styleUrls: ['./store-dashboard.component.css']
})
export class StoreDashboardComponent extends BaseComponent implements OnInit {


  maxDate!: Date;
  buscador = new FormGroup({
    fechaInicial: new FormControl('', [Validators.required]),
    fechaFinal: new FormControl('', [Validators.required])
  })

  constructor(
    private MainService: MainService
  ) { super() }

  ngOnInit(): void {

    this.maxDate = new Date();
    let fecha_ini = new Date();

    fecha_ini.setDate(fecha_ini.getDate() - 30);

    this.buscador.patchValue({
      fechaInicial: fecha_ini,
      fechaFinal: new Date()
    })

    this.buscar();

  }

  data: any;
  loading: boolean = false;
  active: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  pedidosPorDia: any = [];
  producMasVendidos: any = [];
  ventas: any = {};
  buscar() {
    let ini = new Date(this.buscador.controls['fechaInicial'].value);
    let end = new Date(this.buscador.controls['fechaFinal'].value);
    //console.log(ini, end)
    this.loading = true;
    this.MainService.ApiService.get('/admin/reportes/' + ini + '/' + end + '/' + this.MainService.AuthService.dataStore.Id).subscribe(resp => {
      console.log(resp)
      this.data = resp;
      this.pedidosPorDia = this.data.PedidosPorDias;
      this.producMasVendidos = this.data.ProductosMasvendidos;
      this.ventas = this.data.Ventas;
      // console.log(this.pedidosPorDia);
      // console.log(this.producMasVendidos);
      //console.log(this.ventas.Cantidad);
      this.producMasVendidos.length > 0 ? this.active = true : this.active = false;
      this.ventas.Cantidad > 0 ? this.active2 = true : this.active2 = false;
      this.producMasVendidos.length > 0 ? this.active3 = true : this.active3 = false;
      console.log(this.active, this.active2, this.active3);
      this.loading = false;
    })
  }

}
