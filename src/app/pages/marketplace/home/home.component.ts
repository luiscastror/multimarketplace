import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  banners: any = [
    'https://http2.mlstatic.com/D_NQ_611165-MLA73047274550_112023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_611165-MLA73047274550_112023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_NP694875-MLA73046029363_112023-B.webp',
  ]

  images: any = [
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
  ]

  enum: any = [
    {
      title: 'Categorías',
      subtitle: 'Mira la variedad de categorías que tenemos',
      justify: 'start'
    },
    {
      title: 'Vende con nosotros',
      subtitle: 'Muestra todos tus productos aquí',
      justify: 'center'
    },
    {
      title: 'Promocionate aquí',
      subtitle: 'Muestra todos tus productos aquí',
      justify: 'center'
    },
    {
      title: 'Más de 300 tiendas',
      subtitle: 'Compra en más de 300 tiendas',
      justify: 'center'
    }
  ]

  blocks: any = {
    type: 'column',
    content: [
      {
        icon: 'redeem',
        title: 'Mensaje',
        message: 'Este es un mensaje'
      },
      {
        icon: 'redeem',
        title: 'Mensaje',
        message: 'Este es un mensaje'
      },
      {
        icon: 'redeem',
        title: 'Mensaje',
        message: 'Este es un mensaje'
      },
      {
        icon: 'redeem',
        title: 'Mensaje',
        message: 'Este es un mensaje'
      }
    ]
  }



  path_api_categories: string = '/categorias';
  path_api_products: string = '/productosXpromocion/';
  path_api_stores: string = '/tiendas';
  path_api_master: string = '/masters/743BA848-EB22-4B52-A333-34C438BD2E72';


  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
    this.loadStores();
    this.loadMaster();
  }


  categories: any;
  loading: boolean = true;
  loadCategories() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api_categories).subscribe((resp: any) => {
      this.categories = resp;
      this.loading = false;
    }, error => {
      console.error(error)
    })
  }


  products: any;
  loading2: boolean = true;
  loadProducts() {
    this.loading2 = true;
    this.MainService.ApiService.get(this.path_api_products).subscribe((resp: any) => {
      this.products = resp;
      this.loading2 = false;
    }, error => {
      console.error(error)
    })
  }

  stores: any;
  loading3: boolean = true;
  loadStores() {
    this.loading3 = true;
    this.MainService.ApiService.get(this.path_api_stores).subscribe((resp: any) => {
      this.stores = resp;
      this.loading3 = false;
    }, error => {
      console.error(error)
    })
  }

  Banners2: any;
  loading4: boolean = true;
  loadMaster() {
    this.loading4 = true;
    this.MainService.ApiService.get(this.path_api_master).subscribe((resp: any) => {
      this.Banners2 = resp.Banners;
      this.loading4 = false;
    }, error => {
      console.error(error)
    })
  }

}
