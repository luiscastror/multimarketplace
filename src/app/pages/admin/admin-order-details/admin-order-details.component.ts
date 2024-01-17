import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

  id: string = '';
  idStore: string = '';
  EstadoPedido!: string;
  Estado!: string;
  rutePublic : string ="https://multimarketplace-d500d27833e2.herokuapp.com/admin/my-order-detail/"+this.id+"/"+this.idStore;

  constructor(
    public MainService: MainService,
    private ruta: ActivatedRoute,
  ) {
    this.id = this.ruta.snapshot.params.id;
    this.idStore = this.ruta.snapshot.params.idStore;
  }

  ngOnInit(): void {
    this.loadPed()
  }

  ped: any = [];
  loadPed() {
    this.MainService.ApiService.get('/admin/pedidos/' + this.MainService.AuthService.dataStore.Id + '/' + this.id).subscribe((resp: any) => {
      this.ped = resp;

      this.EstadoPedido = resp.EstadoPedido;
      this.Estado = resp.Estado == 'PEN' ? 'PENDIENTE' : 'PAGADO';
    })
  }

}
