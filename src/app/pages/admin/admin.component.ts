import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent extends BaseComponent implements OnInit {

  constructor(
    public MainService: MainService
  ) {
    super()
  }

  ngOnInit(): void {
    this.loadStores();
  }

  logout() {
    this.MainService.AuthService.clearData();
    this.MainService.SnackbarService.show("Saliendo..")
  }


  stores: any = [];
  loadStores() {
    this.MainService.ApiService.get('/admin/tiendas/').subscribe((resp: any) => {
      this.stores = resp;
      if (this.stores && this.stores.length > 0) {
        this.MainService.AuthService.setStore(this.stores[0])
        this.MainService.AuthService.assignStore();
      }
    })
  }

}
