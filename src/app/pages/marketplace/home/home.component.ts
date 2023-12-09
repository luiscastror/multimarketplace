import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  banners: any = [
    '/assets/img/banners/banner2.jpg',
    '/assets/img/banners/banner1.jpg',
    'https://seeri.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSMARTA.2ead5ec8.png&w=2048&q=75',
    'https://seeri.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FISOFIT.991719fc.png&w=2048&q=75'
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

  images: any = [
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
    'https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&dpr=1.1&pid=SANGAM',
  ]

  categories: string[] = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

  constructor() { }

  ngOnInit(): void {
  }

}
