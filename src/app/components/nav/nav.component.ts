import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private ruta: ActivatedRoute,
  ) {
    this.searchInput = this.ruta.snapshot.queryParams.keyword || '';
  }

  ngOnInit(): void {
    this.searchInput = this.ruta.snapshot.queryParams.keyword || '';
  }

  search() {
    this.router.navigate(['/search'], { queryParams: { keyword: this.searchInput } });
  }

}
