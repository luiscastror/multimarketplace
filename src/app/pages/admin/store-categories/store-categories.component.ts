import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modal-confirm.component';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-categories',
  templateUrl: './store-categories.component.html',
  styleUrls: ['./store-categories.component.css']
})
export class StoreCategoriesComponent implements OnInit {

  path_api: string = '/admin/subCategorias/';

  constructor(
    private MainService: MainService,
    private MatDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.load();
  }

  items: any = [];
  load() {
    this.items = [];
    this.MainService.ApiService.get(this.path_api + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.items = resp;
    })
  }

  modal(item: any) {
    const dialogRef = this.MatDialog.open(ModalConfirmComponent, {
      panelClass: ['col-12', 'col-md-3', 'mx-auto'],
      data: {
        message: "¿Desea eliminar esta categoría?",
        buttonConfirm: 'Si, estoy seguro',
        buttonCancel: 'Cancelar'
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        this.remove(item)
      }
    });
  }

  remove(item: any) {
    this.MainService.ApiService.delete(this.path_api + this.MainService.AuthService.dataStore.Id + '/' + item.Id).subscribe((resp: any) => {
      this.load();
    }, (err) => {
      this.MainService.SnackbarService.show(err.error.message);
    })
  }

}
