import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  form = new FormGroup({
    Id: new FormControl(''),
    Descripcion: new FormControl(''),
    Biografia: new FormControl(''),
    CategoriaId: new FormControl(''),
  });

  constructor(
    private MainService: MainService
  ) {

  }

  ngOnInit(): void {
    this.loadStore();
    this.loadCategorias();
  }

  loading4: boolean = true;
  store: any = {};
  loadStore() {
    this.loading4 = true;
    this.MainService.ApiService.get('/admin/tiendas/' + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.form.patchValue(resp);
      console.log(this.form.value);
      console.log(resp)
      this.store = resp;
      this.store.Id = this.MainService.AuthService.dataStore.Id;
      this.store.UsuarioId = this.MainService.AuthService.dataUser.UsuarioId;
      //this.store.CategoriaId = '91AD9E7D-6C7A-426A-90C8-0DC078E934A2';
      this.loading4 = false;
    })
  }


  change() {
    this.MainService.ApiService.put('/admin/tiendas/', this.form.value).subscribe((resp: any) => {
      console.log('Este es el form:' + this.form.value)
      console.log(resp)
      this.MainService.SnackbarService.show("Cambios guardados correctamente")
    })
  }

  categorias: any = [];
  loadCategorias() {
    this.MainService.ApiService.get("/categorias").subscribe((resp: any) => {
      this.categorias = resp;
      console.log(this.categorias)
    })
  }

}
