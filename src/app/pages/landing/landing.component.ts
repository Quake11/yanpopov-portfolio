import { ObservableMedia } from '@angular/flex-layout';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import {
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight,
  fadeInWithScaleUp
} from '../../animations/fade-in';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    fadeInFromBottom,
    fadeInFromLeft,
    fadeInFromRight,
    fadeInWithScaleUp
  ]
})
export class LandingComponent implements OnInit {
  overPhysics: boolean;
  overIt: boolean;

  init: boolean;

  constructor(
    public animation: AnimationService,
    private renderer: Renderer2,
    public media: ObservableMedia
  ) {}

  ngOnInit() {
    this.init = true;
    /*     KUTE.fromTo(
      '#hello',
      { draw: '50% 0%' },
      { draw: '0% 100%' },
      { duration: 2000 }
    ).start(); */
  }

  mouseOver(event, subject) {
    this.renderer.addClass(event.currentTarget, 'mat-elevation-z15');

    if (subject === 'physics') {
      this.overPhysics = true;
    }

    if (subject === 'it') {
      this.overIt = true;
    }
  }

  mouseOut(event, subject) {
    this.renderer.removeClass(event.currentTarget, 'mat-elevation-z15');

    if (subject === 'physics') {
      this.overPhysics = false;
    }

    if (subject === 'it') {
      this.overIt = false;
    }
  }
}
