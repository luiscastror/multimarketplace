import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  items: any = [];
  loading: boolean = true;
  path_api: string = '/productosXpromocion/';
  productsEvery : boolean = true;

  constructor(
    private MainService: MainService,
  ) { }

  ngOnInit(): void {
    this.load();
    //this.cargar();
  }
  
  items2: any[] = [];
  load() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api).subscribe((resp: any) => {
      this.items = resp
      this.items2 = resp;
      this.loading = false;
    }, (error) => {
      console.error(error)
    }, () => { })
  }

  productSearch: string = '';
  groupProductSearch : any = []
  productForSearch : boolean = false;
  vacio2 : boolean = false;
  search(productSearch:string){ //Carga array por busqeueda sea por descripcion o Subcategoria
    this.groupProductSearch = this.items2.filter(
      (product) => product.Descripcion.toLowerCase().indexOf(productSearch.toLowerCase()) > -1 
      || product.Observacion.toLowerCase().indexOf(productSearch.toLowerCase()) > -1,
      );
      this.productsEvery = false;
      this.productForSearch = true;
      this.groupProductSearch.length == 0 ? this.vacio2 = true : this.vacio2 = false;
      //console.log(this.groupProductSearch);
  }

  // cargar(){ //Para cargar todos los productos al presionar todas
  //   this.productForSearch = false;
  //   this.vacio2 = false;
  //   this.productsEvery = true;
  // }

}
