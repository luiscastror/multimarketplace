import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/base';


@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent extends BaseComponent implements OnInit {

  form = new FormGroup({
    Id: new FormControl(''),
    Biografia: new FormControl(''),
    CategoriaId: new FormControl(''),
    Descripcion: new FormControl(''),
    Logo: new FormControl(''),
    Portada: new FormControl(''),
    UsuarioId: new FormControl(''),
    PublicKey: new FormControl(''),
    Signature: new FormControl(''),
    Telefono: new FormControl(''),
  });

  constructor(
    private MainService: MainService
  ) {
    super()
  }

  ngOnInit(): void {
    this.loadStore();
    this.loadCategorias();
  }

  loading: boolean = true;
  store: any = {};
  loadStore() {
    this.loading = true;
    this.MainService.ApiService.get('/admin/tiendas/' + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      console.log(resp)
      this.store = resp;
      this.form.patchValue(this.store);
      this.form.patchValue({
        UsuarioId: this.MainService.AuthService.dataUser.UsuarioId,
        Id: this.MainService.AuthService.dataStore.Id
      })
      this.loading = false;
    })
  }

  change() {
    this.MainService.ApiService.put('/admin/tiendas/', this.form.value).subscribe((resp: any) => {
      this.MainService.SnackbarService.show("Cambios guardados correctamente")
    })
  }

  categorias: any = [];
  loadCategorias() {
    this.MainService.ApiService.get("/categorias").subscribe((resp: any) => {
      this.categorias = resp;
    })
  }


  setForm(key: string, value: string) {

    this.form.patchValue({
      [key]: value
    })

  }
}
