import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public isAuth: boolean = false;
  public isStore: boolean = true;
  public userBody: any = {
    name: 'Luis Castro'
  }

  constructor() { }
}
