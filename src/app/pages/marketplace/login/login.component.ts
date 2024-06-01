import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  form = new FormGroup({
    Correo: new FormControl('', [Validators.email]),
    Clave: new FormControl(''),
  });

  path_api: string = '/login/'

  constructor(
    private MainService: MainService,
    private router: Router,
  ) {
    super();
    this.MainService.AuthService.deleteToken();
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.MainService.ApiService.post(this.path_api, this.form.value).subscribe((resp: any) => {
        this.MainService.AuthService.setToken(resp.token);
        this.MainService.AuthService.getDatauser();
        this.MainService.SnackbarService.show("Bienvenido");
        this.router.navigate(['/admin/my-info']);
      }, err => {
        this.MainService.SnackbarService.show(err.error.message);
      })
    } else {
      this.MainService.SnackbarService.show("Error en la solicitud");
    }
  }

}
