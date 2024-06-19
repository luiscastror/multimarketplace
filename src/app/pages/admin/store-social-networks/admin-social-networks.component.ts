import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modal-confirm.component';
import { BaseComponent } from 'src/app/base';

@Component({
  selector: 'app-admin-social-networks',
  templateUrl: './admin-social-networks.component.html',
  styleUrls: ['./admin-social-networks.component.css']
})
export class AdminSocialNetworksComponent extends BaseComponent implements OnInit {

  path_api: string = '/admin/redesSociales/'
  loading: boolean = false;


  constructor(
    private MainService: MainService,
    private MatDialog: MatDialog

  ) { super() }

  ngOnInit(): void {
    this.loadSocial();
  }

  redes: any = [];
  loadSocial() {
    this.loading = true;
    this.redes = [];
    this.MainService.ApiService.get(this.path_api + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.redes = resp;
      this.loading = false;
    })
  }

  modal(item: any) {
    const dialogRef = this.MatDialog.open(ModalConfirmComponent, {
      panelClass: ['col-12', 'col-md-3', 'mx-auto'],
      data: {
        message: "¿Desea eliminar esta red social?",
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
      this.loadSocial();
      this.loading = false;
    })
  }

}
