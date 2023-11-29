import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() listProducts: string[] = ['0', '0', '0', '0'];
  constructor() { }

  ngOnInit(): void {
  }

}
