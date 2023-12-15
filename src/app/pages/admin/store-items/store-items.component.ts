import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {


  view: string = 'list';

  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  items: any = [];
  load() {
    this.items = [];
    this.MainService.ApiService.get('/admin/productos/' + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      console.log(resp)
      this.items = resp;
    })
  }

}
