import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base';

@Component({
  selector: 'app-card-entrepreneur',
  templateUrl: './card-entrepreneur.component.html',
  styleUrls: ['./card-entrepreneur.component.css']
})
export class CardEntrepreneurComponent extends BaseComponent implements OnInit {

  @Input() item: any = {};


  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
