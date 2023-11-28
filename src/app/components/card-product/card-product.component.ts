import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() img: string = 'https://th.bing.com/th/id/OIP.gpB7_qn-l-hIYeLufFtPWwAAAA?rs=1&pid=ImgDetMain';


  constructor() { }

  ngOnInit(): void {
  }

}
