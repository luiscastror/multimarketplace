import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public MainService: MainService
  ) { }

  ngOnInit(): void { }

  calculate() {

    let total = 0;
    let discount = 0;
    let subtotal = 0;

    this.MainService.CartService.listCart.forEach((businees: any) => {
      businees.items.forEach((item: any) => {
        total += (item.Valor * item.cart_count) - (item.Descuento / 100 * item.Valor * item.cart_count);
        discount += (item.Descuento / 100 * item.Valor * item.cart_count);
        subtotal += (item.Valor * item.cart_count);
      });
    });

    return {
      discount: discount,
      subtotal: subtotal,
      total: total
    };

  }

  changeCart() {
    this.MainService.CartService.updateCart();
  }

  removeItem(businees: number, item: number) {
    this.MainService.SnackbarService.show("Producto elminado correctamente")
    this.MainService.CartService.listCart[businees].items.splice(item, 1);
    this.changeCart();
  }
}
