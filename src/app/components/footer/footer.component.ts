import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-components-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BaseComponent implements OnInit {

  info: any;
  // path_api: string = '/masters/743BA848-EB22-4B52-A333-34C438BD2E72';
  path_api: string = '/masters/6C093F6D-4997-42B8-AE30-3F1E6CBDA091';
  loading: boolean = true;

  constructor(
    public MainService: MainService,
    private router: Router,
    private ruta: ActivatedRoute,
  ) {
    super();
    this.searchInput = this.ruta.snapshot.queryParams.keyword || '';
  }

  ngOnInit(): void {
    this.load()
    this.checkIsLogged();
  }


  load() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api).subscribe((resp: any) => {
      this.info = resp;
      //info2 : any;
      //localStorage.setItem('master', JSON.stringify(this.info));
      // this.info2 = localStorage.getItem('master');
      this.loading = false;
    }, error => {
      console.error(error)
    })
  }

  searchInput!: string;

  isLog: boolean = false;
  checkIsLogged() {
    this.isLog = this.MainService.AuthService.isAuth();
  }



}
