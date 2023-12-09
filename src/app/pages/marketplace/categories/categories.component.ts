import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  path_api: string = '/categorias'
  items: any[] = [];
  loading: boolean = true;

  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api).subscribe((resp: any) => {
      console.log(this.path_api, resp)
      this.items = resp
      this.loading = false;
    }, (error) => {
      console.error(error)
    }, () => { })
  }

}
