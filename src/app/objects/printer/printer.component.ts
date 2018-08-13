import { Component, OnInit, Renderer2 } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
const KUTE = window['KUTE'];

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {
  printing = false;
  printed = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  print() {
    if (this.printed || this.printing) {
      return;
    }
    this.printing = true;
    const test1 = document.getElementsByClassName('detail1');
    const test2 = document.getElementsByClassName('detail2');
    const detail = document.getElementsByClassName('detail');

    const firstStage = 1500;

    for (let i = 0; i < test1.length; i++) {
      const detailCap = document.getElementById('detail-cap');
      detailCap.style.opacity = '1';

      const el = detail[i];
      KUTE.to(
        el,
        { path: test1[i], opacity: 1 },
        { duration: firstStage, morphPrecision: 5, morphIndex: 200 }
      ).start();
    }
    for (let i = 0; i < test2.length; i++) {
      const el = detail[i];
      KUTE.fromTo(
        el,
        { path: test1[i] },
        { path: test2[i] },
        {
          duration: 4000,
          delay: firstStage,
          morphPrecision: 4,
          morphIndex: 1,
          complete: this.afterPrinted.bind(this)
        }
      ).start();
    }
  }

  afterPrinted() {
    this.printed = true;
    this.printing = false;
    const cylinder = document.getElementById('cylinder');
    const frontside = document.getElementById('frontside');
    const frontsidePrinted = document.getElementById('frontside-printed');

    setTimeout(function() {
      frontsidePrinted.appendChild(frontside);
    }, 200);

    this.renderer.addClass(cylinder, 'printed');
  }
}
