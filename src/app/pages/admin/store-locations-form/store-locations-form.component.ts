import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-locations-form',
  templateUrl: './store-locations-form.component.html',
  styleUrls: ['./store-locations-form.component.css']
})
export class StoreLocationsFormComponent implements OnInit {

  form = new FormGroup({
    Descripcion: new FormControl(''),
    Direccion: new FormControl(''),
    Lat: new FormControl(''),
    Log: new FormControl(''),
    Telefono: new FormControl(''),
    Correo: new FormControl(''),
    TiendaId: new FormControl(''),
    EsPrincipal: new FormControl(false),
  });

  constructor(
    private MainService: MainService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form.patchValue({
      TiendaId: this.MainService.AuthService.dataStore.Id
    })
  }

  submit() {
    if (this.form.valid) {
      this.MainService.ApiService.post('/admin/sucursales', this.form.value).subscribe((resp: any) => {
        this.MainService.SnackbarService.show("Sucursal creada correctamente");
        this.router.navigate(['/admin/my-store-locations']);
      }, err => {
        this.MainService.SnackbarService.show(err.error.message);
      })
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

}
