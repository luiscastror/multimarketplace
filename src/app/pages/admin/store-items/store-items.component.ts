import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {


  view: string = 'list';
  constructor() { }

  ngOnInit(): void {
  }

}