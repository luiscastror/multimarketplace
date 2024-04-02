import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-store-locations',
  templateUrl: './store-locations.component.html',
  styleUrls: ['./store-locations.component.css']
})
export class StoreLocationsComponent implements OnInit {

  // view: string = 'list';
  path_api: string = '/admin/sucursales/';
  loading: boolean = false;

  constructor(
    private MainService: MainService,
    private MatDialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.load();
  }

  items: any = [];
  load() {
    this.loading = true;
    this.items = [];
    this.MainService.ApiService.get(this.path_api + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.items = resp;
      this.loading = false;
    })
  }

  modal(item: any) {
    const dialogRef = this.MatDialog.open(ModalConfirmComponent, {
      panelClass: ['col-12', 'col-md-3', 'mx-auto'],
      data: {
        message: "¿Desea eliminar esta sucursal?",
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
    this.loading = true;
    this.MainService.ApiService.delete(this.path_api + this.MainService.AuthService.dataStore.Id + '/' + item.Id).subscribe((resp: any) => {
      this.load();
      this.loading = false;
    }, (err) => {
      this.MainService.SnackbarService.show(err.error.message);
    })
  }

}
