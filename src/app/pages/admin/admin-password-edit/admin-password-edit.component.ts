import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-admin-password-edit',
  templateUrl: './admin-password-edit.component.html',
  styleUrls: ['./admin-password-edit.component.css']
})
export class AdminPasswordEditComponent implements OnInit {

  form = new FormGroup({
    ContraseñaActual: new FormControl(''),
    ContraseñaNueva: new FormControl(''),
    ContraseñaConfirm: new FormControl('')
  });

  constructor(
    private MainService: MainService
  ) {
  }

  ngOnInit(): void {
  }


  submit() { }

}
