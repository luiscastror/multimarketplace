import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  banners: any = [
    'https://storage.googleapis.com/seeri-banners/banners/co/4c109c3a6b1137b17aa7e60c05fa576b/bannerweb4-1696950167874.png',
    'https://seeri.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNUTRA.386283cc.png&w=2048&q=75',
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
    'https://seeri.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fseeri-brands%2FBrands%2Fco%2FTGGCwvCMRziO3q3frkWw%2Fimages%2FKWW1675445492238&w=2048&q=75',
    'https://seeri.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fseeri-brands%2FBrands%2Fco%2F6df867b8-9461-420e-b10d-639ee8a7c29c%2Fimages%2F29C1685193469575&w=2048&q=75',
    'https://seeri.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fseeri-brands%2FBrands%2Fco%2FTGGCwvCMRziO3q3frkWw%2Fimages%2FKWW1675445492238&w=2048&q=75',
    'https://seeri.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fseeri-brands%2FBrands%2Fco%2F6df867b8-9461-420e-b10d-639ee8a7c29c%2Fimages%2F29C1685193469575&w=2048&q=75'
  ]

  categories: string[] = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

  constructor() { }

  ngOnInit(): void {
  }

}
