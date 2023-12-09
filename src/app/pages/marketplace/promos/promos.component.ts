import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  items: any = {};
  loading: boolean = true;
  path_api: string = '/productosXpromocion/'

  constructor(
    private MainService: MainService,
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
