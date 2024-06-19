import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from 'src/app/base';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent extends BaseComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public MainService: MainService
  ) {
    super()
  }

  ngOnInit(): void {
  }

  confirm() {
    this.dialog.close(true)
  }

  close() {
    this.dialog.close(false)
  }

}
