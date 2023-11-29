import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    public CartService: CartService,
    public SnackbarService: SnackbarService
  ) { }
}
