import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-components-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() img: string = 'https://th.bing.com/th/id/OIP.gpB7_qn-l-hIYeLufFtPWwAAAA?rs=1&pid=ImgDetMain';


  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.MainService.SnackbarService.show("Añadido correctamente");

    const business = {
      name: "DEMO",
      uid: '7Ih3J0MEBe'
    }

    const item = {
      uid: '57570819405',
      name: 'Reloj',
      value: 25000,
      count: 1
    }

    const payload = {
      business: business,
      item: item
    }

    this.MainService.CartService.add(payload)

    const business_2 = {
      name: "DEMO",
      uid: '4fa9f4a006b47c5'
    }

    const item_2 = {
      uid: 'MKqgWSl8d',
      name: 'Reloj',
      value: 25000,
      count: 1
    }

    const payload_2 = {
      business: business_2,
      item: item_2
    }

    this.MainService.CartService.add(payload_2)

    const business_3 = {
      name: "DEMO",
      uid: '4fa9f4a006b47c5'
    }

    const item_3 = {
      uid: 'MKqgWSl8wwwd',
      name: 'Reloj',
      value: 25000,
      count: 1
    }

    const payload_3 = {
      business: business_3,
      item: item_3
    }

    this.MainService.CartService.add(payload_3)

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

