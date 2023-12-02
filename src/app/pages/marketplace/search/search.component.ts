import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cantidad : number = 6;

  marcas : string[] =['Xiomi','Samsung','iPhone','Nokia'];


  filtros : any[] =[
    {
      "id":1,
    "valor":'relevancia'
    },
    {
      "id":2,
    "valor":'Mayor a menor precio'
    },
    {
      "id":3,
    "valor":'Menor a mayor precio'
    }
  ];

  listProducts : any[] = ['','','','','',''];

}
