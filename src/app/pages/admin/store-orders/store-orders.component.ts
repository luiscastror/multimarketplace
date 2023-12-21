import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-orders',
  templateUrl: './store-orders.component.html',
  styleUrls: ['./store-orders.component.css']
})
export class StoreOrdersComponent implements OnInit {

  path_ped_store: string = '/admin/pedidos/';
  view: string = 'list';

  constructor(
    private MainService : MainService
  ) { }
  ngOnInit(): void {
    this.loadPedStore();
  }

itemsForStore: any = [];
num_items: number = 0;
  many_items: boolean = false;
  loadPedStore(){
    this.MainService.ApiService.get(this.path_ped_store + this.MainService.AuthService.dataStore.Id).subscribe((resp:any)=>{
      this.itemsForStore = resp;
      this.num_items = resp.length;
      this.num_items > 0 ? this.many_items = true : this.many_items = false;
      console.log('Pedidos De la tienda: '+ resp );
    })
  }

}
