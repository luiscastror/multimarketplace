import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-components-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() item: any = {};

  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.MainService.SnackbarService.show("Añadido correctamente");
    this.MainService.CartService.add(this.item)
  }


  remove() {
    const business = {
      name: "DEMO",
      uid: '4fa9f4a006b47c5'
    }

    const item = {
      uid: 'MKqgWSl8d',
      name: 'Reloj',
      value: 25000,
      count: 1
    }

    const payload = {
      business: business,
      item: item
    }

    this.MainService.CartService.removeItem(payload)

  }

  removeStore() {
    const business = {
      name: "DEMO",
      uid: '4fa9f4a006b47c5'
    }

    const payload = {
      business: business
    }

    this.MainService.CartService.removeStore(payload)
  }


  clear() {
    this.MainService.CartService.clear()
  }

}

