import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
const KUTE = window['KUTE'];

@Component({
  selector: 'app-physics-device',
  templateUrl: './physics-device.component.html',
  styleUrls: ['./physics-device.component.scss']
})
export class PhysicsDeviceComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.physicsDevice();
  }

  physicsDevice() {
    const digits: NodeListOf<Element> = document.querySelectorAll('.digit');
    const lampoff: Element = document.getElementById('lampoff');
    const volt: Element = document.getElementById('volt');

    const startDelay = 1500;
    const duration = 150;

    KUTE.to(
      lampoff,
      { opacity: 0 },
      { duration: 500, delay: startDelay }
    ).start();

    for (let index = 0; index < digits.length; index++) {
      const prevElement = digits[index - 1];
      const element = digits[index];
      const delay = duration * index + startDelay;

      if (index === 0) {
        KUTE.to(
          volt,
          { opacity: 1 },
          { duration: 100, delay: startDelay }
        ).start();
      }

      if (prevElement) {
        KUTE.to(
          prevElement,
          { opacity: 0 },
          { duration: 0, delay: delay }
        ).start();
      }

      KUTE.to(
        element,
        { opacity: 1 },
        { duration: duration, delay: delay }
      ).start();
    }
  }
}
