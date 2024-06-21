import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-banks',
  templateUrl: './card-banks.component.html',
  styleUrls: ['./card-banks.component.css']
})
export class CardBanksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() complete: boolean = false;

}
