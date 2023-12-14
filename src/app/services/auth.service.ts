import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public dataUser: any = {};
  public dataStore: any = {};

  constructor() {

    this.dataStore = this.getStore();

    if (this.isAuth()) {
      this.getDatauser();
    }

  }

  clearData() {
    this.deleteStore();
    this.deleteToken();
    this.dataStore = {};
    this.dataUser = {};
  }

  setToken(token: string) {
    localStorage.setItem("tokens_multimarketplace", token);
  }

  getToken() {
    return localStorage.getItem("tokens_multimarketplace");
  }

  deleteToken() {
    localStorage.removeItem("tokens_multimarketplace");
  }

  getDatauser() {
    let token = this.getToken();
    let dato: any = jwtDecode(token || '');
    this.dataUser = dato;
  }

  isAuth() {
    return (this.getToken() !== null) ? true : false;
  }


  setStore(store: any) {
    localStorage.setItem("store_multimarketplace", JSON.stringify(store));
    this.dataStore = this.getStore();
  }

  getStore() {
    return JSON.parse(localStorage.getItem("store_multimarketplace") || '{}');
  }

  deleteStore() {
    localStorage.removeItem("store_multimarketplace");
  }

  assignStore() {
    this.dataStore = this.getStore();
  }

}
