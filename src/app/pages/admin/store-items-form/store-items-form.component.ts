import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-items-form',
  templateUrl: './store-items-form.component.html',
  styleUrls: ['./store-items-form.component.css']
})
export class StoreItemsFormComponent implements OnInit {


  form = new FormGroup({
    Id: new FormControl(''),
    Descripcion: new FormControl(''),
    Observacion: new FormControl(''),
    TiendaId: new FormControl(''),
    TiendaSubCategoriaId: new FormControl(''),
    Valor: new FormControl(0),
    Descuento: new FormControl(0),
    Imagenes: new FormControl(''),
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
    this.loadCategorias();
    this.loadProducto();
  }

  // submit() {
  //   if (this.form.valid) {
  //     this.MainService.ApiService.post('/admin/productos', this.form.value).subscribe((resp: any) => {
  //       this.MainService.SnackbarService.show("Item creado correctamente");
  //       this.router.navigate(['/admin/my-store-items']);
  //     }, err => {
  //       this.MainService.SnackbarService.show(err.error.Error);
  //     })
  //   } else {
  //     this.MainService.SnackbarService.show("Datos pendientes por llenar");
  //   }
  // }

  submit() {
    if (this.form.valid) {
      const url = this.edit ? '/admin/productos/' + this.ruta.snapshot.params.id : '/admin/productos';
      const message = this.edit ? "Item actualizado correctamente" : "Item creado correctamente";
      const apiCall = this.edit ? this.MainService.ApiService.put(url, this.form.value) : this.MainService.ApiService.post(url, this.form.value);
      const aplicar = () => {
        apiCall.subscribe(
          (resp: any) => {
            this.MainService.SnackbarService.show(message);
            this.router.navigate(['/admin/my-store-items']);
          },
          (err) => {
            this.MainService.SnackbarService.show(err.error.Error);
          }
        );
      }
      aplicar();
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

  categorias: any = [];
  loadCategorias() {
    this.MainService.ApiService.get("/admin/subCategorias/" + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.categorias = resp;
      console.log(this.categorias)
    })
  }


  loadProducto() {
    this.MainService.ApiService.get("/admin/productos/" + this.MainService.AuthService.dataStore.Id + "/" + this.id).subscribe((resp: any) => {
      this.form.patchValue(resp);
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
