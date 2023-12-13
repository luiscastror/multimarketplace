import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: any = {};

  loading: boolean = true;
  image!: string;
  imageSelected: number = 0;

  id = this.ruta.snapshot.params.id;
  path_api: string = '/productos/' + this.id;

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
  ) {
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      this.path_api = '/productos/' + this.id;
      this.load();
    });
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api).subscribe((resp: any) => {
      this.item = resp
      this.loading = false;
      this.image = this.item.Imagenes[0].URL;
      this.loadToo();
    }, (error) => {
      console.error(error)
    }, () => { })
  }


  itemsToo: any = []
  loadToo() {
    this.MainService.ApiService.get('/productosXtienda/' + this.item.Producto.TiendaId).subscribe((resp: any) => {
      this.itemsToo = resp.Productos;
    }, (error) => {
      console.error(error)
    }, () => { })
  }


  add() {
    this.MainService.SnackbarService.show("Añadido correctamente");
    this.MainService.CartService.add(this.item.Producto)
  }
}
