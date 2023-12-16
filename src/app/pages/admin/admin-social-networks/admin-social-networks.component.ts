import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-social-networks',
  templateUrl: './admin-social-networks.component.html',
  styleUrls: ['./admin-social-networks.component.css']
})
export class AdminSocialNetworksComponent implements OnInit {

  view: string = 'list';


  constructor(
    private MainService: MainService

  ) { }

  ngOnInit(): void {
    this.loadSocial();
  }

  redes: any = [];
  loadSocial() {
    this.redes = [];
    this.MainService.ApiService.get('/admin/redesSociales/' + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      console.log(resp)
      this.redes = resp;
    })
  }

}
