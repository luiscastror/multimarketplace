import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  contentCart: any;


  constructor(
    public MainService: MainService
  ) { }

  ngOnInit(): void {

    this.contentCart = this.MainService.CartService.listCart.length > 0 ? '' : '';

  }




  changeCart() {
    this.MainService.CartService.updateCart();
  }

  removeItem(businees: number, product: number) {
    this.MainService.SnackbarService.show("Producto elminado correctamente")
    this.MainService.CartService.listCart[businees].items.splice(product, 1);
    this.changeCart();
  }
}
