import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-items-form',
  templateUrl: './store-items-form.component.html',
  styleUrls: ['./store-items-form.component.css']
})
export class StoreItemsFormComponent implements OnInit {


  form = new FormGroup({
    Descripcion: new FormControl(''),
    Observacion: new FormControl(''),
    TiendaId: new FormControl(''),
    TiendaSubCategoriaId: new FormControl(''),
    Valor: new FormControl(0),
    Descuento: new FormControl(0),
    Imagenes: new FormControl(''),
  });

  constructor(
    private MainService: MainService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form.patchValue({
      TiendaId: this.MainService.AuthService.dataStore.Id,
    })
    this.loadCategorias();
  }

  submit() {
    if (this.form.valid) {
      this.MainService.ApiService.post('/admin/productos', this.form.value).subscribe((resp: any) => {
        this.MainService.SnackbarService.show("Item creado correctamente");
        this.router.navigate(['/admin/my-store-items']);
      }, err => {
        this.MainService.SnackbarService.show(err.error.Error);
      })
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
