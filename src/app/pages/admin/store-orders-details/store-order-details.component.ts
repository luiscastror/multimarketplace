import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-order-details',
  templateUrl: './store-order-details.component.html',
  styleUrls: ['./store-order-details.component.css']
})
export class StoreOrderDetailsComponent implements OnInit {

  id: string = '';
  constructor(
    private MainService : MainService,
    private ruta: ActivatedRoute,
  ) { 
    this.id = this.ruta.snapshot.params.id;
    //console.log(this.id);
  }

  ngOnInit(): void {
    this.loadPed()
  }

  ped : any = [];
  loadPed(){
    this.MainService.ApiService.get('/admin/pedidos/' + this.MainService.AuthService.dataStore.Id + '/' + this.id).subscribe((resp:any)=>{
      this.ped = resp;
      console.log(this.ped);
    })
  }

}
