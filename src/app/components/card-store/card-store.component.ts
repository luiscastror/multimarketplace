import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.css']
})
export class CardStoreComponent implements OnInit {

  @Input() item: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
