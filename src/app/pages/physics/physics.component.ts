import { Component, OnInit, Renderer2 } from '@angular/core';
import { list } from '../../animations/list';
import { fadeInFromBottom } from '../../animations/fade-in';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.scss'],
  animations: [list, fadeInFromBottom]
})
export class PhysicsComponent implements OnInit {
  classes: Array<any> = [
    {
      name: '7 класс',
      url: 'https://drive.google.com/drive/folders/0B5wIFvFgJ7GNYVl1eHAxVDk5b0E'
    },
    {
      name: '8 класс',
      url: 'https://drive.google.com/open?id=0B5wIFvFgJ7GNZXlmNFAwU2liS0E'
    },
    {
      name: '10 класс',
      url: 'https://drive.google.com/open?id=0B5wIFvFgJ7GNY0xFM2NUODNYMms'
    },
    {
      name: '11 класс',
      url: 'https://drive.google.com/open?id=0B5wIFvFgJ7GNdmxrRVVSa1VacDQ'
    }
  ];

  init: boolean;

  constructor(
    private renderer: Renderer2,
    public animation: AnimationService
  ) {}

  ngOnInit() {}

  mouseOver(event) {
    this.renderer.addClass(event.currentTarget, 'mat-elevation-z15');
  }

  mouseOut(event) {
    this.renderer.removeClass(event.currentTarget, 'mat-elevation-z15');
  }
}
