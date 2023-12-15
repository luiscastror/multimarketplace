import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-categories-form',
  templateUrl: './store-categories-form.component.html',
  styleUrls: ['./store-categories-form.component.css']
})
export class StoreCategoriesFormComponent implements OnInit {

  form = new FormGroup({
    Descripcion: new FormControl(''),
    TiendaId: new FormControl(''),
  });
   
  activo: boolean =false;
  id : string = '';
  constructor(
    private MainService: MainService,
    private router: Router,
    private ruta: ActivatedRoute,
  ) { 
  this.id = this.ruta.snapshot.params.id;
  console.log(this.id);

  this.activo = this.id ? true : false;
  }


  ngOnInit(): void {
    this.form.patchValue({
      TiendaId: this.MainService.AuthService.dataStore.Id
    })
    this.loadCategory();
  }

  // submit() {
  //   if (this.form.valid) {
  //     this.MainService.ApiService.post('/admin/subCategorias', this.form.value).subscribe((resp: any) => {
  //       this.MainService.SnackbarService.show("Categoria creada correctamente");
  //       this.router.navigate(['/admin/my-store-categories']);
  //     }, err => {
  //       this.MainService.SnackbarService.show(err.error.Error);
  //     })
  //   } else {
  //     this.MainService.SnackbarService.show("Datos pendientes por llenar");
  //   }
  // }

  
  submit() {
    if (this.form.valid) {
      const url = this.activo ? '/admin/subCategorias/' + this.ruta.snapshot.params.id : '/admin/subCategorias';
      const message = this.activo ? "Categoría actualizada correctamente" : "Categoría creada correctamente";
      const apiCall = this.activo ? this.MainService.ApiService.put(url, this.form.value) : this.MainService.ApiService.post(url, this.form.value);
      const aplicar = ()=>{
        apiCall.subscribe(
          (resp: any) => {
            this.MainService.SnackbarService.show(message);
            this.router.navigate(['/admin/my-store-categories']);
          },
          (err) => {
            this.MainService.SnackbarService.show(err.error.Error );
          }
        );
      }
      aplicar();
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

  category: any = {};
  loadCategory() {
    this.MainService.ApiService.get("/categorias/" + this.id).subscribe((resp: any) => {
      this.category = resp;
      console.log(this.category)
    })
  }

  



}
