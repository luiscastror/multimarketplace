import { MainService } from 'src/app/services/main.service';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  loading: boolean = false;
  path_api: string = '/usuarios/solicitarCambio/';

  form = new FormGroup({
    Correo: new FormControl('', [Validators.required])
  })

  constructor(
    private MainService: MainService,
    private SnackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
  }


  submit() {
    if (this.form.valid) {
      this.loading = true;
      this.MainService.ApiService.post(this.path_api, this.form.value).subscribe((resp: any) => {
        console.log(resp);
        this.SnackbarService.show('Verifique su correo y siga las instrucciones');
        this.loading = false;
      })
      // console.log(this.form.value)
    }

  }
}
