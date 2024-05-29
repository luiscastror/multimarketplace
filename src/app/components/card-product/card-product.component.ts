import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-components-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent extends BaseComponent implements OnInit {

  @Input() item: any = {};
  @Input() withCar: boolean = true;


  constructor(
    private MainService: MainService
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(this.item)
  }

  add() {
    this.MainService.SnackbarService.show("Añadido correctamente");
    this.MainService.CartService.add(this.item)
  }

  clear() {
    this.MainService.CartService.clear()
  }

}

