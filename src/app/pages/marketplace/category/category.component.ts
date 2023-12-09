import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  path_api: string = '/productosXcategoria/39953BEF-549A-4163-BF00-64E123257CC2'
  items: any = {};
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
