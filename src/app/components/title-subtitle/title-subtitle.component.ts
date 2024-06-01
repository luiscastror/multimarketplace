import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base';

@Component({
  selector: 'app-components-title-subtitle',
  templateUrl: './title-subtitle.component.html',
  styleUrls: ['./title-subtitle.component.css']
})
export class TitleSubtitleComponent extends BaseComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() justify: 'center' | 'start' | 'end' = 'center'; //Opciones que se pueden tomar y sino por defecto toma el center

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
