import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-categories',
  templateUrl: './store-categories.component.html',
  styleUrls: ['./store-categories.component.css']
})
export class StoreCategoriesComponent implements OnInit {

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
    this.MainService.ApiService.get('/admin/subCategorias/' + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.items = resp;
    })
  }

}
