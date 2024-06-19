import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent extends BaseComponent implements OnInit {


  constructor(
    private MainService: MainService
  ) { super() }

  ngOnInit(): void {
    this.loadUser()
  }

  user: any = {};
  loadUser() {
    this.MainService.ApiService.get('/usuarios/Miperfil').subscribe((resp: any) => {
      this.user = resp;
    })
  }

}
