import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  countCart: number = 0;
  listCart: any;

  constructor() {
    this.load();
    this.count()
  }

  count() {
    let count = 0;
    if (this.listCart.length > 0) {
      this.listCart.forEach((businees: any) => {
        businees.items.forEach((item: any) => {
          count += item.cart_count
        });
      });
    }
    return count
  }

  load() {
    const cart = JSON.parse(localStorage.getItem('cartMultimarketplace') || '[]');
    this.listCart = cart;
    this.countCart = cart.length;
  }

  add(payload: any) {
    const indexBusiness = this.listCart.findIndex((cart: any) => cart.TiendaId == payload.TiendaId);
    if (indexBusiness == -1) {
      this.listCart.push({
        TiendaId: payload.TiendaId,
        Tienda: payload.Tienda,
        items: [{
          ...payload,
          cart_count: 1
        }]
      })
    } else {
      const indexItem = this.listCart[indexBusiness].items.findIndex((item: any) => item.Id == payload.Id);
      console.log(indexItem)
      if (indexItem == -1) {
        this.listCart[indexBusiness].items.push({
          ...payload,
          cart_count: 1
        });
      } else {
        this.listCart[indexBusiness].items[indexItem].cart_count++;
      }
    }
    console.log(this.listCart)
    this.updateCart();
  }

  removeItem(payload: any) {
    const indexBusiness = this.listCart.findIndex((cart: any) => cart.business.uid == payload.business.uid);
    if (indexBusiness != -1) {
      const indexItem = this.listCart[indexBusiness].items.findIndex((item: any) => item.uid == payload.item.uid);
      if (indexItem != -1) {
        this.listCart[indexBusiness].items.splice(indexItem, 1);
      }
    }
    this.updateCart();
  }

  removeStore(payload: any) {
    const indexBusiness = this.listCart.findIndex((cart: any) => cart.business.uid == payload.business.uid);
    if (indexBusiness != -1) {
      this.listCart.splice(indexBusiness, 1);
    }
    this.updateCart();
  }


  clear() {
    this.listCart = [];
    this.updateCart()
  }

  updateCart() {
    localStorage.setItem('cartMultimarketplace', JSON.stringify(this.listCart));
    this.load();
  }

}
