import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  path_api_master: string = '/masters/743BA848-EB22-4B52-A333-34C438BD2E72';

  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
    this.loadMaster();
    this.getRandom();
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

  random: any;
  getRandom() {
    this.MainService.ApiService.get('/random').subscribe((resp: any) => {
      this.random = resp;
    }, error => {
      console.error(error)
    })
  }


}
