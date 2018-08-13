import { Component, OnInit, Renderer2 } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import { fadeInFromBottom } from '../../animations/fade-in';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'app-self-education',
  templateUrl: './self-education.component.html',
  styleUrls: ['./self-education.component.scss'],
  animations: [fadeInFromBottom]
})
export class SelfEducationComponent implements OnInit {
  init: boolean;
  public carouselPhotos: NguCarousel;

  presentations = [
    {
      url: 'https://sway.com/s/QjwvNPuABdCoKJAD/embed',
      img: 'assets/self-education/presentation-1.jpg',
      title: 'Применение облачных технологий.'
    },
    {
      url: 'https://sway.com/s/DuhZijGJtgBJo3NC/embed',
      img: 'assets/self-education/presentation-2.jpg',
      title: 'Отчёт. Самообразование.'
    }
  ];

  photos = [
    {
      url: 'assets/self-education/3d-1.jpg'
    },
    {
      url: 'assets/self-education/3d-2.jpg'
    },
    {
      url: 'assets/self-education/3d-3.jpg'
    },
    {
      url: 'assets/self-education/3d-4.jpg'
    }
  ];

  constructor(
    public animation: AnimationService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.init = true;
    this.carouselPhotos = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      // interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 6px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 5px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    };
  }

  updateSrc(object, url, preview) {
    this.renderer.setAttribute(object, 'src', url);
    this.renderer.addClass(preview, 'hidden');
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
