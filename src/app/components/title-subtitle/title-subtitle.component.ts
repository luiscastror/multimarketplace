import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components-title-subtitle',
  templateUrl: './title-subtitle.component.html',
  styleUrls: ['./title-subtitle.component.css']
})
export class TitleSubtitleComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
