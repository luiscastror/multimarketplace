import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  loading: boolean = true;
  id = this.ruta.snapshot.params.id;
  path_api_store: string = '/tiendas/' + this.id;
  path_api_store_items: string = '/productosXtienda/' + this.id;

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.load_store();
    this.load_store_items();
  }

  info: any = {};
  load_store() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api_store).subscribe((resp: any) => {
      this.info = resp;
    }, (error) => {
      console.error(error)
    }, () => {
      this.loading = false;
    })
  }

  items: any = [];
  loading_items: boolean = true;
  load_store_items() {
    this.loading_items = true;
    this.MainService.ApiService.get(this.path_api_store_items).subscribe((resp: any) => {
      this.items = resp;
    }, (error) => {
      console.error(error)
    }, () => {
      this.loading_items = false;
    })
  }

}