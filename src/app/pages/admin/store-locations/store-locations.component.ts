import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-locations',
  templateUrl: './store-locations.component.html',
  styleUrls: ['./store-locations.component.css']
})
export class StoreLocationsComponent implements OnInit {

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
    this.MainService.ApiService.get('/admin/sucursales/' + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.items = resp;
      console.log(this.items)
    })
  }

}
