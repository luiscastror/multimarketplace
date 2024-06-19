import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent extends BaseComponent implements OnInit {

  path_ped_user: string = '/usuarios/MisPedidos';

  constructor(
    private MainService: MainService
  ) { super() }

  ngOnInit(): void {
    this.loadPedUser();
  }


  itemsForUser: any = [];
  num_items: number = 0;
  many_items: boolean = false;
  loading: boolean = false;
  loadPedUser() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_ped_user).subscribe((resp: any) => {
      this.itemsForUser = resp;
      this.num_items = resp.length;
      this.num_items > 0 ? this.many_items = true : this.many_items = false;
      this.loading = false;
    })
  }




}
