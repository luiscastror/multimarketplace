import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-admin-social-networks',
  templateUrl: './admin-social-networks.component.html',
  styleUrls: ['./admin-social-networks.component.css']
})
export class AdminSocialNetworksComponent implements OnInit {

  view: string = 'list';
  path_api: string = '/admin/redesSociales/'


  constructor(
    private MainService: MainService,
    private MatDialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.loadSocial();
  }

  redes: any = [];
  loadSocial() {
    this.redes = [];
    this.MainService.ApiService.get(this.path_api + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      console.log(resp)
      this.redes = resp;
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
    this.MainService.ApiService.delete(this.path_api + this.MainService.AuthService.dataStore.Id + '/' + item.Id).subscribe((resp: any) => {
      this.loadSocial();
    })
  }

}
