import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {


  constructor(
    private MainService: MainService
  ) { }

  ngOnInit(): void {
    this.loadUser()
  }

  user: any = {};
  loadUser() {
    this.MainService.ApiService.get('/usuarios/Miperfil').subscribe((resp: any) => {
      console.log(resp)
      this.user = resp;
      console.log(this.user)
    })
  }

}
