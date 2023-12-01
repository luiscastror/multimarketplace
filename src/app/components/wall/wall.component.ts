import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  @Input() img: string = 'https://th.bing.com/th/id/OIP.gpB7_qn-l-hIYeLufFtPWwAAAA?rs=1&pid=ImgDetMain'
  @Input() blocks = {
    type: 'row',
    content: [
      {
        icon: 'redeem',
        title: 'Mensaje',
        message: 'Este es un mensaje'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
