import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-components-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(
    public MainService: MainService
  ) { }

  ngOnInit(): void {
  }

  producto: any = {
    "img": 'https://http2.mlstatic.com/D_NQ_NP_923145-MLA54095248890_032023-O.webp',
    "nombre": 'Xiaomi Pocophone Poco X5 Pro 5G Dual SIM 256 GB negro 8 GB RAM',
    "precio": '1.230.000',
    "descuento": '20% OFF'
  }

  add() {
    this.MainService.SnackbarService.show("Añadido correctamente");

    const business = {
      name: "BAQ-CEL",
      uid: '7Ih3J0MEBe'
    }

    const item = {
      uid: '57570819405',
      name: 'Celular Xiaomi',
      value: 1230000,
      count: 1
    }

    const payload = {
      business: business,
      item: item
    }

    this.MainService.CartService.add(payload)

  }

}
