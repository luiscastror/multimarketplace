import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private MainService: MainService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form.patchValue({
      TiendaId: this.MainService.AuthService.dataStore.Id
    })
  }

  submit() {
    if (this.form.valid) {
      this.MainService.ApiService.post('/admin/subCategorias', this.form.value).subscribe((resp: any) => {
        this.MainService.SnackbarService.show("Categoria creada correctamente");
        this.router.navigate(['/admin/my-store-categories']);
      }, err => {
        this.MainService.SnackbarService.show(err.error.Error);
      })
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

}
