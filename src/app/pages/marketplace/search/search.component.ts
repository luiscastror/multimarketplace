import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  queryParams: any;
  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.router.events.pipe(filter(event => event instanceof ActivationEnd)).subscribe((filter: any) => {
      this.queryParams = filter.snapshot.queryParams;
      if (this.queryParams.keyword) {
        this.load();
      }
    })
  }

  ngOnInit(): void {
    this.queryParams = this.ruta.snapshot.queryParams;
    this.load();
  }

  load() {
    this.MainService.ApiService.get("/filter/" + this.queryParams.keyword).subscribe((resp: any) => {
      console.log(resp)
    })
  }

  cantidad: number = 6;

  marcas: string[] = ['Xiomi', 'Samsung', 'iPhone', 'Nokia'];


  filtros: any[] = [
    {
      "id": 1,
      "valor": 'relevancia'
    },
    {
      "id": 2,
      "valor": 'Mayor a menor precio'
    },
    {
      "id": 3,
      "valor": 'Menor a mayor precio'
    }
  ];

  listProducts: any[] = ['', '', '', '', '', ''];

}
