import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent extends BaseComponent implements OnInit {

  loading: boolean = true;
  id = this.ruta.snapshot.params.id;
  path_api_store: string = '/tiendas/' + this.id;
  path_api_store_items: string = '/productosXtienda/' + this.id;
  productsEvery: boolean = true;

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
    private router: Router,
  ) {
    super()
    this.load_store_items();
  }

  ngOnInit(): void {
    this.load_store();
    this.load_store_items();
  }

  info: any = {};
  load_store() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api_store).subscribe((resp: any) => {
      this.info = resp;
      console.dir(this.info);
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
  cantItemsSubCategory: any[] = [];
  load_store_items() {
    this.loading_items = true;
    this.MainService.ApiService.get(this.path_api_store_items).subscribe((resp: any) => {
      this.items = resp;
      this.items2 = resp.Productos;
      // Calcula la cantidad de productos por subcategoría y agrégalo a info.SubCategorias
      // Asegurarse de que info y SubCategorias están definidos
      if (this.info && Array.isArray(this.info.SubCategorias)) {
        // Calcula la cantidad de productos por subcategoría y agrégalo a info.SubCategorias
        this.info.SubCategorias.forEach((subCategoria: any) => {
          const cantidad = this.items2.filter((product: any) => product.SubCategoria == subCategoria.Descripcion).length;
          subCategoria.Cantidad = cantidad;
        });

        console.log(this.info.SubCategorias);
      } else {
        console.error('SubCategorias no está definido o no es un array');
      }
      console.dir(this.info);
      // console.log(this.cantItemsSubCategory[0].length);
      // console.dir('necesito ver: ' + this.items2)
    }, (error) => {
      console.error(error)
    }, () => {
      this.loading_items = false;
    })
  }

  productForCategory: boolean = false;
  itemsForSubCategory: any = [];
  vacio: boolean = false;
  load_items_subcategory(subcategory: string) { //Carga array por subcategorias
    this.itemsForSubCategory = this.items2.filter((product: any) => product.SubCategoria == subcategory);
    this.productsEvery = false;
    this.productForSearch = false;
    this.productForCategory = true;
    this.vacio2 = false
    this.show = false;
    this.itemsForSubCategory.length == 0 ? this.vacio = true : this.vacio = false;
  }

  descriptionItem: string = '';
  setDescripcionItem(descripcion: string) {
    this.descriptionItem = descripcion;
  }


  productSearch: string = '';
  groupProductSearch: any = []
  productForSearch: boolean = false;
  vacio2: boolean = false;
  search(productSearch: string) { //Carga array por busqeueda sea por descripcion o Subcategoria
    this.productForSearch = true;
    if (this.activeItem !== 'all') {
      this.groupProductSearch = this.items2.filter(
        (product) =>
          (product.Descripcion.toLowerCase().indexOf(productSearch.toLowerCase()) > -1 && product.SubCategoria == this.descriptionItem)
          ||
          (product.Observacion.toLowerCase().indexOf(productSearch.toLowerCase()) > -1 && product.SubCategoria == this.descriptionItem)
      );
      this.productsEvery = false;
      this.productForCategory = false;
      this.vacio = false
      this.show = false;
      this.groupProductSearch.length == 0 && this.productSearch !== '' ? this.vacio2 = true : this.vacio2 = false;
    } else {
      this.productForSearch = true;
      this.groupProductSearch = this.items2.filter(
        (product) => (product.Descripcion.toLowerCase().indexOf(productSearch.toLowerCase()) > -1
          || product.Observacion.toLowerCase().indexOf(productSearch.toLowerCase()) > -1)
      );
      this.productsEvery = false;
      this.productForCategory = false;
      this.vacio = false
      this.show = false;
      this.groupProductSearch.length == 0 ? this.vacio2 = true : this.vacio2 = false;
    }
  }




  cargar() { //Para cargar todos los productos al presionar todas
    this.productForCategory = false;
    this.productForSearch = false;
    this.vacio = false;
    this.vacio2 = false;
    this.show = false;
    this.productsEvery = true;
  }

  activeItem: string | number = 'all';
  setActiveItem(item: string | number) {
    this.activeItem = item;
  }

  show: boolean = false;
  messageBranch: string = '';
  showBranch(index: number) {
    this.show = !this.show;
    this.messageBranch = `Sucursal ${this.info.Sucursales[index].Descripcion},<br/>
    Direccion: ${this.info.Sucursales[index].Direccion},<br/>
    Telefono: ${this.info.Sucursales[index].Telefono},<br/>
    Correo: ${this.info.Sucursales[index].Correo}`
  }

  getLogoStyles() {
    return {
      'background-image': `url(${this.info.Tienda.Logo})`,
      'border-color': this.color1,
      'border-style': 'solid',
      'border-width': '1px',
      'width': '13vh',
      'height': '13vh',
      'border-radius': '50%',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'margin-top': '-60px',
      'margin-bottom': '10px',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-color': 'white',
      'background-position': 'center'
    };
  }
}