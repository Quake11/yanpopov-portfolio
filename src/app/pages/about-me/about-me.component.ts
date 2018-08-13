import { Component, OnInit, Renderer2 } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import { fadeInFromBottom } from '../../animations/fade-in';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeInFromBottom]
})
export class AboutMeComponent implements OnInit {
  init: boolean;

  constructor(
    public animation: AnimationService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.init = true;
  }

  public onIntersection({
    target,
    visible
  }: {
    target: Element;
    visible: boolean;
  }): void {
    if (this.init && visible) {
      this.renderer.addClass(target, 'active');
    }
  }
}
