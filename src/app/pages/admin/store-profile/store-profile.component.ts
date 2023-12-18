import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  img_logo : string = 'assets/img/logo.jpg';
  img_portada : string = 'assets/img/logo.jpg';

  constructor(
    private MainService: MainService
  ) { 

  }

  ngOnInit(): void {
    this.loadStore();
  }

  loading4: boolean = true;
  store: any = {};
  loadStore() {
    this.loading4 = true;
    this.MainService.ApiService.get('/admin/tiendas/'+this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      console.log(resp)
      this.store = resp;
      if(resp.Log !== '')
        this.img_logo = resp.Logo
      else this.img_logo = 'assets/img/logo.jpg';
      if(resp.Log !== '')
        this.img_portada = resp.Portada
      else this.img_portada = 'assets/img/logo.jpg';
      this.loading4 = false;
    })
  }
}
