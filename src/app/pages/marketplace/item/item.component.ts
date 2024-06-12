import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent extends BaseComponent implements OnInit {

  item: any = {};

  loading: boolean = true;
  image!: string;
  imageSelected: number = 0;

  idStore = this.ruta.snapshot.params.idStore;
  id = this.ruta.snapshot.params.id;
  path_api: string = '/productos/' + this.id;
  path_api_store: string = '/tiendas/' + this.idStore;

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
    private router: Router,
  ) {
    super()
    console.log(this.id + '   ' + this.idStore)
  }

  ngOnInit() {
    this.load()
    this.load_store();
    !this.arrow ? this.nombreIcon = 'keyboard_arrow_down' : this.nombreIcon = 'keyboard_arrow_up';

  }

  load() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api).subscribe((resp: any) => {
      this.item = resp
      this.loading = false;
      this.image = this.item.Imagenes[0].URL;
      this.loadToo();
    }, (error) => {
      this.MainService.SnackbarService.show(error.error.message);
      this.router.navigate(['/']);
    }, () => { })
  }

  info: any = {};
  load_store() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api_store).subscribe((resp: any) => {
      this.info = resp;
      this.loading = false;
      console.log(this.info);
    }, (error) => {
      console.error(error)
      this.MainService.SnackbarService.show(error.error.message);
      this.router.navigate(['/']);
    }, () => {
      this.loading = false;
    })
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

  arrow: boolean = false;
  nombreIcon: string = "";
  cambiar() {
    this.arrow = !this.arrow;
    !this.arrow ? this.nombreIcon = 'keyboard_arrow_down' : this.nombreIcon = 'keyboard_arrow_up';
  }
}
