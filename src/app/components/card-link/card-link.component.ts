import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base';

@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.css']
})
export class CardLinkComponent extends BaseComponent implements OnInit {

  currentCardIndex: number = 0;

  @Input() title: string = 'Ingresa tu cuenta';
  @Input() img: string = 'https://th.bing.com/th/id/OIP.gpB7_qn-l-hIYeLufFtPWwAAAA?rs=1&pid=ImgDetMain';
  @Input() body: string = 'Disftura de ofertas y compras sin limite';
  @Input() nameButtom: string = 'Ingresa ahora';

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

  setCardIndex(index: number): void {
    this.currentCardIndex = index;
  }

}
