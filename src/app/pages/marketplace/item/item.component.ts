import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

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
}
