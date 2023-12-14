import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public MainService: MainService
  ) { }

  ngOnInit(): void {
    this.loadStores();
  }

  logout() {
    this.MainService.AuthService.deleteToken();
    this.MainService.SnackbarService.show("Saliendo..")
  }


  stores: any = [];
  loadStores() {
    this.MainService.ApiService.get('/admin/tiendas/97929F2A-4C7B-4E42-B431-35A57AD5CFE4').subscribe((resp: any) => {
      this.stores = resp;
      if (this.stores && this.stores.length > 0) {
        this.MainService.AuthService.setStore(this.stores[0])
      }
    })
  }

}
