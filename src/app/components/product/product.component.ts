import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() img: string = 'https://th.bing.com/th/id/OIP.gpB7_qn-l-hIYeLufFtPWwAAAA?rs=1&pid=ImgDetMain';

}
