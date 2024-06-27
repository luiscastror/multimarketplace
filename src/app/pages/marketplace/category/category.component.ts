import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  items: any = {}; // Manteniendo items como any
  loading: boolean = true;
  id = this.ruta.snapshot.params.id;
  path_api: string = '/productosXcategoria/' + this.id;

  productSearch: string = '';
  groupProductSearch: any = {}; // Manteniendo groupProductSearch como any
  productForSearch: boolean = false;
  vacio2: boolean = false;
  vacio1: boolean = true;

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api).subscribe((resp: any) => {
      this.items = resp;
      this.loading = false;
    }, (error) => {
      this.MainService.SnackbarService.show(error.error.message);
      this.router.navigate(['/']);
    }, () => { });
  }

  search(productSearch: string) { // Carga array por búsqueda sea por descripción o subcategoría
    this.productForSearch = true;
    this.groupProductSearch = this.items.Productos.filter(
      (product: any) =>
        product.Descripcion.toLowerCase().includes(productSearch.toLowerCase()) ||
        product.Observacion.toLowerCase().includes(productSearch.toLowerCase())
    );
    this.vacio1 = this.productSearch === '' ? true : false;
    this.vacio2 = this.groupProductSearch.length > 0 && this.productSearch !== '';
  }
}
