import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-store-social-form',
  templateUrl: './store-social-form.component.html',
  styleUrls: ['./store-social-form.component.css']
})
export class StoreSocialFormComponent implements OnInit {

  form = new FormGroup({
    ParRedId: new FormControl(''),
    URL: new FormControl(''),
    TiendaId: new FormControl('')
  });

  edit: boolean = false;
  id: string = '';
  constructor(
    private MainService: MainService,
    private router: Router,
    private ruta: ActivatedRoute,
  ) {
    this.id = this.ruta.snapshot.params.id;
    console.log(this.id);

    this.edit = this.id ? true : false;
  }

  ngOnInit(): void {
    this.form.patchValue({
      TiendaId: this.MainService.AuthService.dataStore.Id,
    })
    this.loadSocial();

    if (this.edit) {
      this.oneLoadSocial();
    }
  }

  submit() {
    if (this.form.valid) {
      this.MainService.ApiService.post('/admin/redesSociales', this.form.value).subscribe((resp: any) => {
        this.MainService.SnackbarService.show("Red creada correctamente");
        this.router.navigate(['/admin/my-store-social']);
      }, err => {
        this.MainService.SnackbarService.show(err.error.Error);
      })
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

  social: any = []
  loadSocial() {
    this.MainService.ApiService.get("/admin/redesSociales/combos/" + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
      this.social = resp;
      console.log(this.social);
    })
  }

  oneLoadSocial() {
    this.MainService.ApiService.get("/admin/redesSociales/" + this.MainService.AuthService.dataStore.Id + "/" + this.id).subscribe((resp: any) => {
      this.form.patchValue(resp);
    })
  }

  // socialOne: any = []
  // oneLoadSocial() {
  //   this.MainService.ApiService.get("/admin/redesSociales/combos/" + this.MainService.AuthService.dataStore.Id).subscribe((resp: any) => {
  //     this.social = resp;
  //     console.log(this.social);
  //   })
  // }


  urlFile(file: any) {

    const nexFile: any = [];

    file.map((f: any, index: number) => {
      nexFile.push({
        URL: f,
        EsPrincipal: index == 0 ? true : false
      })
    })

    this.form.patchValue({
      Imagenes: nexFile,
    });
  }

}
