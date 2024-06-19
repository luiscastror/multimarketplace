import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-password-edit',
  templateUrl: './admin-password-edit.component.html',
  styleUrls: ['./admin-password-edit.component.css']
})
export class AdminPasswordEditComponent extends BaseComponent implements OnInit {

  form = new FormGroup({
    ContraseñaActual: new FormControl(''),
    ContraseñaNueva: new FormControl(''),
    ContraseñaConfirm: new FormControl('')
  });

  constructor(
    private MainService: MainService
  ) {
    super();
  }

  ngOnInit(): void {
  }


  submit() { }

}
