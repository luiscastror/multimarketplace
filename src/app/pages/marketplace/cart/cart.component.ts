import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {

  constructor(
    public MainService: MainService
  ) {
    super()
  }

  ngOnInit(): void { }

  changeCart() {
    this.MainService.CartService.updateCart();
  }

  removeItem(businees: number, item: number) {
    this.MainService.SnackbarService.show("Producto elminado correctamente")
    this.MainService.CartService.listCart[businees].items.splice(item, 1);
    this.changeCart();
  }


  press(index: number) {
    console.log(index);
  }

}
