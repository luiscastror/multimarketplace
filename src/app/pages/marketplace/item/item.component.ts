import { MainService } from './../../../services/main.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base';

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

  id = this.ruta.snapshot.params.id;
  path_api: string = '/productos/' + this.id;
  numberStore: string = '';

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
    private router: Router,
  ) {
    super()
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      this.path_api = '/productos/' + this.id;
      this.numberStore = this.MainService.AuthService.dataUser.Telefono;
      this.load();
    });
  }

  ngOnInit(): void { }

  load() {
    this.loading = true;
    console.dir(this.MainService.AuthService.dataUser.Telefono);
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
