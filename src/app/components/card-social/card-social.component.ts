import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-card-social',
  templateUrl: './card-social.component.html',
  styleUrls: ['./card-social.component.css']
})
export class CardSocialComponent implements OnInit {
  
  @Input() item: any = {};

  constructor() { }

  ngOnInit(): void {
  }


}
