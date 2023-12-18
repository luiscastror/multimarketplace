import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-store-social-form',
  templateUrl: './store-social-form.component.html',
  styleUrls: ['./store-social-form.component.css']
})
export class StoreSocialFormComponent implements OnInit {

  form = new FormGroup({
    Id: new FormControl(null),
    RedSocialId: new FormControl(''),
    URL: new FormControl(''),
    TiendaId: new FormControl('')
  });

  edit: boolean = false;
  id: string = '';
  constructor(
    private MainService: MainService,
    private router: Router,
    private ruta: ActivatedRoute,
  ) {
    this.id = this.ruta.snapshot.params.id;
    console.log(this.id);

    this.edit = this.id ? true : false;
  }

  ngOnInit(): void {
    this.form.patchValue({
      TiendaId: this.MainService.AuthService.dataStore.Id,
    })
    this.loadSocial();


  }

  submit() {
    if (this.form.valid) {
      if (this.edit)
        this.MainService.ApiService.put('/admin/redesSociales', this.form.value).subscribe((resp: any) => {
          this.MainService.SnackbarService.show("Red creada correctamente");
          this.router.navigate(['/admin/my-store-social']);
        }, err => {
          this.MainService.SnackbarService.show(err.error.message);
        })
      else
        this.MainService.ApiService.post('/admin/redesSociales', this.form.value).subscribe((resp: any) => {
          this.MainService.SnackbarService.show("Red creada correctamente");
          this.router.navigate(['/admin/my-store-social']);
        }, err => {
          this.MainService.SnackbarService.show(err.error.message);
        })
      // const url = '/admin/productos';
      // const message = this.edit ? "Red actualizada correctamente" : "Red creada correctamente";
      // const apiCall = this.edit ? this.MainService.ApiService.put(url, this.form.value) : this.MainService.ApiService.post(url, this.form.value);
      // const aplicar = () => {
      //   apiCall.subscribe(
      //     (resp: any) => {
      //       this.MainService.SnackbarService.show(message);
      //       this.router.navigate(['/admin/my-store-social']);
      //     },
      //     (err) => {
      //       this.MainService.SnackbarService.show(err.error.message);
      //     }
      //   );
      // }
      // aplicar();
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

  social: any = []
  loadSocial() {
    this.MainService.ApiService.get("/admin/redesSociales/combos/" + this.MainService.AuthService.dataStore.Id + "/" + this.edit).subscribe((resp: any) => {
      this.social = resp;
      if (this.edit) {
        this.oneLoadSocial();
      }
      console.log(this.social);
    })
  }

  oneLoadSocial() {
    this.MainService.ApiService.get("/admin/redesSociales/" + this.MainService.AuthService.dataStore.Id + "/" + this.id).subscribe((resp: any) => {
      this.form.patchValue(resp);
      console.log(resp);
    })
  }



  urlFile(file: any) {

    const nexFile: any = [];

    file.map((f: any, index: number) => {
      nexFile.push({
        URL: f,
        EsPrincipal: index == 0 ? true : false
      })
    })

    this.form.patchValue({
      Imagenes: nexFile,
    });
  }

}
