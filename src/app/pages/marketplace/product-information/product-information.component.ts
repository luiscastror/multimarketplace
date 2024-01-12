import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  idStore = this.ruta.snapshot.params.idStore;
  id = this.ruta.snapshot.params.id;

  constructor(
    private ruta: ActivatedRoute,
    public MainService : MainService

  ) {}

  ngOnInit(): void {
    //console.log(this.id, 'idStore', this.idStore);
    this.loadPed();
  }

  pedido : any = {};
  loadPed(){
    this.MainService.ApiService.get('/admin/pedidos/'+this.idStore+'/'+ this.id).subscribe((resp:any)=>{
      this.pedido = resp;
      console.log(this.pedido);
    })
  }

}
