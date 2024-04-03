import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-change-password-two',
  templateUrl: './change-password-two.component.html',
  styleUrls: ['./change-password-two.component.css']
})
export class ChangePasswordTwoComponent implements OnInit {

  loading: boolean = false;
  path_api: string = '/usuarios/cambiarClave/';

  form = new FormGroup({
    Correo: new FormControl('', [Validators.required, Validators.maxLength(70)]),
    Codigo: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    Clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(
    private MainService: MainService,
    private SnackbarService: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  submit() {
    if (this.form.valid) {
      this.loading = true;
      this.MainService.ApiService.post(this.path_api, this.form.value).subscribe((resp: any) => {
        console.log(resp);
        this.SnackbarService.show('Su contraseña se ha actualizado con exito');
        this.loading = false;
        this.router.navigate(['/login']);
      }, (err: any) => {
        this.SnackbarService.show(err.error.message);
        this.loading = false;

      })
      // console.log(this.form.value)
    }

  }

}
