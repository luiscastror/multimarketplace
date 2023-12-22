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
  name:string='';
  estadoPedi:string='';

  constructor(
    private MainService : MainService
  ) { }
  ngOnInit(): void {
    this.loadPedStore();
  }

  itemsForStore: any = [];
  //itemsForStore2: any = [];
  num_items: number = 0;
  many_items: boolean = false;
  loading: boolean = false;
  loadPedStore(){
    this.loading = true;
    this.MainService.ApiService.get(this.path_ped_store + this.MainService.AuthService.dataStore.Id).subscribe((resp:any)=>{
    this.itemsForStore = resp;
    //this.itemsForStore2 = this.itemsForStore;
    this.num_items = resp.length;
    this.num_items > 0 ? this.many_items = true : this.many_items = false;
    this.loading = false;
      console.log('Pedidos De la tienda: ' );
    })
  }

  itemsForStore2: any = [];
  productSearch: string ='';
  //searching : boolean = false;
  vacio2 : boolean = false;
  search(productSearch:string){
    this.itemsForStore2 = this.itemsForStore.filter((product:any)=>(product.Nombres.toLowerCase().indexOf(productSearch.toLowerCase()) > -1 
    || product.EstadoPedido.toLowerCase().indexOf(productSearch.toLowerCase()) > -1 ))
    //this.searching = true;
    this.itemsForStore2.length == 0 ? this.vacio2 = true : this.vacio2 = false;
    console.log(this.itemsForStore2);
  }


  press(){
    console.log('Presionaste')
  }

}
