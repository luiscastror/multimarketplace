import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-store-locations-form',
  templateUrl: './store-locations-form.component.html',
  styleUrls: ['./store-locations-form.component.css']
})
export class StoreLocationsFormComponent implements OnInit {

  form = new FormGroup({
    Id: new FormControl(),
    Descripcion: new FormControl(''),
    Direccion: new FormControl(''),
    Lat: new FormControl(''),
    Log: new FormControl(''),
    Telefono: new FormControl(''),
    Correo: new FormControl(''),
    TiendaId: new FormControl(''),
    EsPrincipal: new FormControl(false),
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
      TiendaId: this.MainService.AuthService.dataStore.Id
    })
    if(this.edit){
      this.loadSucursal()
    }
  }

  // submit() {
  //   if (this.form.valid) {
  //     this.MainService.ApiService.post('/admin/sucursales', this.form.value).subscribe((resp: any) => {
  //       this.MainService.SnackbarService.show("Sucursal creada correctamente");
  //       this.router.navigate(['/admin/my-store-locations']);
  //     }, err => {
  //       this.MainService.SnackbarService.show(err.error.message);
  //     })
  //   } else {
  //     this.MainService.SnackbarService.show("Datos pendientes por llenar");
  //   }
  // }

  
  loadSucursal() {
    this.MainService.ApiService.get("/admin/sucursales/" + this.MainService.AuthService.dataStore.Id + "/" + this.id).subscribe((resp: any) => {
      this.form.patchValue(resp);
      console.log(resp)
    })
  }

  
  submit() {
    if (this.form.valid) {
      const url = '/admin/sucursales';
      const message = this.edit ? "Sucursal actualizada correctamente" : "Sucursal creada correctamente";
      const apiCall = this.edit ? this.MainService.ApiService.put(url, this.form.value) : this.MainService.ApiService.post(url, this.form.value);
      const aplicar = () => {
        apiCall.subscribe(
          (resp: any) => {
            this.MainService.SnackbarService.show(message);
            this.router.navigate(['/admin/my-store-locations']);
          },
          (err) => {
            this.MainService.SnackbarService.show(err.error.message);
          }
        );
      }
      aplicar();
    } else {
      this.MainService.SnackbarService.show("Datos pendientes por llenar");
    }
  }

}
