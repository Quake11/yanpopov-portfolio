import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  animateChild
} from '@angular/animations';

export const fadeInWithScaleUp = trigger('fadeInWithScaleUp', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.5)'
    }),
    animate(
      '1200ms ease-out',
      style({
        opacity: 1,
        transform: 'scale(1)'
      })
    )
  ])
]);

export const fadeInFromBottom = trigger('fadeInFromBottom', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(25px)'
    }),
    animate(
      '1200ms ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    )
  ])
]);

export const fadeInFromTop = trigger('fadeInFromTop', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-25px)'
    }),
    animate(
      '1200ms ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    )
  ])
]);

export const fadeInFromLeft = trigger('fadeInFromLeft', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-75px)'
    }),
    animate(
      '2000ms ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    )
  ])
]);

export const fadeInFromRight = trigger('fadeInFromRight', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(75px)'
    }),
    animate(
      '2000ms ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    )
  ])
]);
