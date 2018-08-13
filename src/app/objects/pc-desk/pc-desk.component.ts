import { fadeInFromBottom } from '../../animations/fade-in';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-pc-desk',
  templateUrl: './pc-desk.component.html',
  styleUrls: ['./pc-desk.component.scss'],
  animations: [
    trigger('lightOn', [
      transition(':enter', [
        style({
          opacity: 0.5,
          filter: 'saturate(0) brightness(0.5)'
        }),
        animate(
          '0.7s 1.9s linear',
          style({ opacity: 1, filter: 'saturate(1) brightness(1)' })
        )
      ])
    ]),

    fadeInFromBottom
  ]
})
export class PcDeskComponent implements OnInit {
  init: boolean;
  constructor() {}

  ngOnInit() {
    this.init = true;
  }
}
