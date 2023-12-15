import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  items: any = {};
  loading: boolean = true;
  id = this.ruta.snapshot.params.id;
  path_api: string = '/productosXcategoria/' + this.id;

  constructor(
    private MainService: MainService,
    private ruta: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.MainService.ApiService.get(this.path_api).subscribe((resp: any) => {
      this.items = resp
      this.loading = false;
    }, (error) => {
      this.MainService.SnackbarService.show(error.error.message);
      this.router.navigate(['/']);
    }, () => { })
  }


}
