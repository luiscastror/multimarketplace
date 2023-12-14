import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    Direccion: new FormControl('Cl 24 a 17 19 Soledad'),
    Telefono: new FormControl('3015376081'),
    Correo: new FormControl('tienda@gmail.com'),
  });


  constructor(
    private MainService: MainService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadCategorias();
  }


  categorias: any = [];
  loadCategorias() {
    this.MainService.ApiService.get("/categorias").subscribe((resp: any) => {
      this.categorias = resp;
      console.log(this.categorias)
    })
  }

  submit() {
    if (this.form.valid) {
      this.form.patchValue(
        {
          UsuarioId: this.MainService.AuthService.dataUser.UsuarioId
        }
      )
      this.MainService.ApiService.post('/admin/tiendas', this.form.value).subscribe((resp: any) => {
        this.MainService.SnackbarService.show("Tienda creada correctamente");
        this.router.navigate(['/admin/my-store-dashboard']);
      }, err => {
        this.MainService.SnackbarService.show(err.error.Error);
      })
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

}
