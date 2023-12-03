import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  searchInput!: string;

  constructor(
    public MainService: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  search() {
    this.router.navigate(['/search'], { queryParams: { keyword: this.searchInput } });
  }
}
