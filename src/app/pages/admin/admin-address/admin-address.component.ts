import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base';

@Component({
  selector: 'app-admin-address',
  templateUrl: './admin-address.component.html',
  styleUrls: ['./admin-address.component.css']
})
export class AdminAddressComponent extends BaseComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
