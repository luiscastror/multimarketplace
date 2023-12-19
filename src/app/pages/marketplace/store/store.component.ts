import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  todosLosProductos : boolean = true;
  productForCategory : boolean = false;

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
    private router: Router,
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
      //console.log(this.info)
    }, (error) => {
      console.error(error)
      this.MainService.SnackbarService.show(error.error.message);
      this.router.navigate(['/']);
    }, () => {
      this.loading = false;
    })
  }

  items: any = [];
  loading_items: boolean = true;
  items2: any[] = [];
  load_store_items() {
    this.loading_items = true;
    this.MainService.ApiService.get(this.path_api_store_items).subscribe((resp: any) => {
      this.items = resp;
      this.items2 = resp.Productos;
      //console.log(this.items2);
    }, (error) => {
      console.error(error)
    }, () => {
      this.loading_items = false;
    })
  }

  itemsForSubCategory: any = [];
  load_items_subcategory(subcategory:string){
    this.itemsForSubCategory = this.items2.filter((product:any) => product.SubCategoria == subcategory)
    this.todosLosProductos = false;
    this.productForCategory = true;
    console.log(this.itemsForSubCategory);
  }

  cargar(){
    this.todosLosProductos = !this.todosLosProductos;
    this.productForCategory = !this.productForCategory;
  }

}