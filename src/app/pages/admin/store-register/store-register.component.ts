import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {

  form = new FormGroup({
    Descripcion: new FormControl(''),
    CategoriaId: new FormControl(''),
    Biografia: new FormControl(''),

    // Blanco
    Logo: new FormControl(''),
    Portada: new FormControl(''),

    UsuarioId: new FormControl(''),

    // Sucursal
    Direccion: new FormControl(''),
    Telefono: new FormControl(''),
    Correo: new FormControl(''),
  });

  // "Descripcion": "string",
  // "CategoriaId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  // "Biografia": "string",
  // "Logo": "string",
  // "Portada": "string",
  // "UsuarioId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  // "Direccion": "string",
  // "Telefono": "string",
  // "Correo": "string"

  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.MainService.ApiService.post('/admin/tiendas', this.form.value).subscribe((resp: any) => {
        this.MainService.SnackbarService.show("Tienda creada correctamente");
        window.location.reload();
      })
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

}
