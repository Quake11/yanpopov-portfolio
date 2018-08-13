import { Injectable } from '@angular/core';
const KUTE = window['KUTE'];

@Injectable()
export class AnimationService {
  action(e, animationTime?, animationName?, callback?) {
    if (e.visible === true && e.target) {
      // in viewport
      if (e.target.wasAssembled === undefined) {
        this.assemble(e.target, animationTime, animationName, callback);
        e.target.wasAssembled = true;
      }
    } else {
      // not in viewport
    }
  }

  assemble(
    obj,
    animationTime = 1500,
    animationName = 'easingSinusoidalInOut',
    callback?: Function
  ) {
    const duration = 2000;
    const animationOffset = 50;

    const fromTop = obj.querySelectorAll('.animate-up');
    const fromRight = obj.querySelectorAll('.animate-toleft');
    const fromBottom = obj.querySelectorAll('.animate-down');
    const fromLeft = obj.querySelectorAll('.animate-toright');

    for (let i = 0; i < fromTop.length; i++) {
      const element = fromTop[i];
      KUTE.fromTo(
        element,
        {
          translateX: 100,
          translateY: -1000,
          rotation: 180,
          skewX: 45,
          opacity: 0
        },
        { translateX: 0, translateY: 0, rotation: 0, skewX: 0, opacity: 1 },
        {
          offset: animationOffset,
          duration: animationTime,
          easing: animationName
        }
      ).start();
    }

    for (let i = 0; i < fromRight.length; i++) {
      const element = fromRight[i];
      KUTE.fromTo(
        element,
        {
          translateX: 1000,
          translateY: 100,
          rotation: 180,
          skewX: 45,
          opacity: 0
        },
        { translateX: 0, translateY: 0, rotation: 0, skewX: 0, opacity: 1 },
        {
          offset: animationOffset,
          duration: animationTime,
          easing: animationName
        }
      ).start();
    }

    for (let i = 0; i < fromBottom.length; i++) {
      const element = fromBottom[i];
      KUTE.fromTo(
        element,
        {
          translateX: 100,
          translateY: 1000,
          rotation: 180,
          skewX: 45,
          opacity: 0
        },
        { translateX: 0, translateY: 0, rotation: 0, skewX: 0, opacity: 1 },
        {
          offset: animationOffset,
          duration: animationTime,
          easing: animationName
        }
      ).start();
    }

    for (let i = 0; i < fromLeft.length; i++) {
      const element = fromLeft[i];
      let cb;
      if (i === fromLeft.length - 1) {
        cb = callback;
      }

      KUTE.fromTo(
        element,
        {
          translateX: -1000,
          translateY: 100,
          rotation: 180,
          skewX: 45,
          opacity: 0
        },
        { translateX: 0, translateY: 0, rotation: 0, skewX: 0, opacity: 1 },
        {
          offset: animationOffset,
          duration: animationTime,
          easing: animationName,
          complete: cb
        }
      ).start();
    }
  }

  bounce() {
    KUTE.allFromTo(
      '.animate-bounce-up',
      { opacity: 1, translate3d: [0, -100, 0] },
      { opacity: 1, translate3d: [0, 0, 0] },
      {
        delay: 10,
        offset: 80,
        duration: 1000,
        easing: 'easingBounceOut',
        transformOrigin: '50% 50%'
      }
    ).start();
  }

  jump() {
    const animationOffset = 0;

    const rotateY = document.getElementsByClassName('rotate-Y');

    const minJump = 1000;
    const maxJump = 2000;

    const jump = Math.random() * (maxJump - minJump) + minJump;

    const tween1Duration = jump;
    const tween2Duration = jump;
    const tween1 = KUTE.allTo(
      rotateY,
      { translate3d: [0, -tween1Duration, 0] },
      {
        offset: animationOffset,
        duration: tween1Duration,
        easing: 'easingSinusoidalOut',
        transformOrigin: '50% 50%'
      }
    );

    const tween2 = KUTE.allTo(
      rotateY,
      { translate3d: [0, 0, 0] },
      {
        offset: animationOffset,
        duration: tween2Duration,
        easing: 'easingSinusoidalIn',
        transformOrigin: '50% 50%',
        complete: function() {
          tween1.start();
        }
      }
    );

    tween1.chain(tween2);
    tween1.start();
    /* tween2.start(); */
  }

  draw(type) {
    const figure = document.getElementById('figure');

    if (type === 1) {
      KUTE.to(figure, { path: '#star' }).start();
    }
    if (type === 2) {
      KUTE.to(figure, { path: '#rectangle' }).start();
    }
  }

  random(min, max) {
    return Math.random() * (max - min) + min;
  }
}
