import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-dashboard',
  templateUrl: './store-dashboard.component.html',
  styleUrls: ['./store-dashboard.component.css']
})
export class StoreDashboardComponent implements OnInit {


  maxDate!: Date;
  buscador = new FormGroup({
    fechaInicial: new FormControl('', [Validators.required]),
    fechaFinal: new FormControl('', [Validators.required])
  })

  constructor(
    private MainService: MainService
  ) { }

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
  buscar() {
    let ini = new Date(this.buscador.controls['fechaInicial'].value);
    let end = new Date(this.buscador.controls['fechaFinal'].value);

    console.log(ini, end)

    this.MainService.ApiService.get('/admin/reportes/' + ini + '/' + end + '/' + this.MainService.AuthService.dataStore.Id).subscribe(resp => {
      console.log(resp)
      this.data = resp;
    })

  }

}
