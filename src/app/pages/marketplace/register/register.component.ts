import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    Nombre: new FormControl(''),
    Correo: new FormControl('', [Validators.email]),
    Telefono: new FormControl(''),
    Clave: new FormControl(''),
  });

  path_api: string = '/usuarios/'

  constructor(
    private MainService: MainService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  submit() {
    if (this.form.valid) {
      this.MainService.ApiService.post(this.path_api, this.form.value).subscribe((resp: any) => {
        this.MainService.SnackbarService.show("Cuenta creada correctamente");
        this.router.navigate(['/login']);

      })
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }
}
