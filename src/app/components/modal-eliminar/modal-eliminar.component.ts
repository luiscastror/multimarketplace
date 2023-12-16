import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

 

}
