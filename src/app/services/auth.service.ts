import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isStore: boolean = true;
  public dataUser: any = {};

  constructor() {

    if (this.getToken()) {
      this.getDatauser()
    }

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

}
