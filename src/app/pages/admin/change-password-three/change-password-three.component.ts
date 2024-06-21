import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-change-password-three',
  templateUrl: './change-password-three.component.html',
  styleUrls: ['./change-password-three.component.css']
})
export class ChangePasswordThreeComponent extends BaseComponent implements OnInit {

  loading: boolean = false;
  path_api: string = '/usuarios/cambiarClaveAdmin/';

  form = new FormGroup({
    Correo: new FormControl(this.MainService.AuthService.dataUser.Correo, [Validators.required, Validators.email]),
    ClaveActual: new FormControl(null, [Validators.required]),
    Clave: new FormControl(null, [Validators.required]),
    ClaveRepetida: new FormControl(null),
  })

  constructor(
    private MainService: MainService,
    private SnackbarService: SnackbarService,
    private router: Router,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
  }


  submit() {
    if (this.form.valid) {
      this.loading = true;
      const claveRepetidaValue = this.form.controls['ClaveRepetida'].value;
      if (this.form.controls['Clave'].value === this.form.controls['ClaveRepetida'].value) {
        this.form.removeControl('ClaveRepetida');
        this.MainService.ApiService.post(this.path_api, this.form.value).subscribe((resp: any) => {
          console.log(resp);
          this.SnackbarService.show('Su contraseña se ha actualizado con exito');
          this.form.reset();
          this.form.addControl('ClaveRepetida', new FormControl(null, [Validators.required]));
          this.goBack();
          this.loading = false;
        }, (err: any) => {
          this.form.addControl('ClaveRepetida', new FormControl(claveRepetidaValue, [Validators.required]));
          this.SnackbarService.show('error: ' + err.error.message);
          this.loading = false;

        })
      } else {
        this.SnackbarService.show('Las claves no coinciden');
        this.loading = false;
      }
    }
  }

  goBack() {
    this.location.back();
  }

}
