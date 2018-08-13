import { Component, OnInit, Renderer2 } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import {
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight
} from '../../animations/fade-in';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [fadeInFromBottom, fadeInFromLeft, fadeInFromRight]
})
export class MediaComponent implements OnInit {
  public carouselBanner: NguCarousel;
  init: boolean;
  learningVideos = [
    {
      url: 'https://www.youtube.com/embed/UUCZ-MLeafA?rel=0&amp',
      img: 'assets/media/learning-1.jpg'
    },
    {
      url: 'https://www.youtube.com/embed/0c5GbJC3yL8?rel=0&amp',
      img: 'assets/media/learning-2.jpg'
    },
    {
      url: 'https://www.youtube.com/embed/lFd0h9uMoss?rel=0&amp',
      img: 'assets/media/learning-3.jpg'
    }
  ];

  workVideos = [
    {
      url: 'https://www.youtube.com/embed/Rc9Cy3mTX3I?rel=0&amp',
      img: 'assets/media/work-1.jpg'
    },
    {
      url: 'https://www.youtube.com/embed/pjoE4YlOmyo?rel=0&amp',
      img: 'assets/media/work-2.jpg'
    }
  ];

  travelVideos = [
    {
      url: 'https://www.youtube.com/embed/DZLg3ARiNdw?rel=0&amp',
      img: 'assets/media/travel-1.jpg'
    },
    {
      url: 'https://www.youtube.com/embed/RjLVGgHJibU?rel=0&amp',
      img: 'assets/media/travel-2.jpg'
    }
  ];

  updateSrc(object, url, preview) {
    this.renderer.setAttribute(object, 'src', url);
    this.renderer.addClass(preview, 'hidden');
  }

  constructor(
    private renderer: Renderer2,
    public animation: AnimationService
  ) {}

  ngOnInit() {
    this.init = true;

    this.carouselBanner = {
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
