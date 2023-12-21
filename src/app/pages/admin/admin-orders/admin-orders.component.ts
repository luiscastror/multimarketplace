import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  path_ped_user: string = '/usuarios/MisPedidos';

  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
    this.loadPedUser();
  }


  itemsForUser: any = [];
  num_items: number = 0;
  many_items: boolean = false;
  loadPedUser(){
    this.MainService.ApiService.get(this.path_ped_user).subscribe((resp:any)=>{
      this.itemsForUser = resp;
      this.num_items = resp.length;
      this.num_items > 0 ? this.many_items = true : this.many_items = false;
      //console.log('Pedidos Del usuario: '+ resp[0].Nombres +  resp[0].Valor);
    })
  }


  

}
