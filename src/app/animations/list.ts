import {
  trigger,
  animate,
  transition,
  style,
  query,
  stagger,
  keyframes
} from '@angular/animations';

export const list = trigger('list', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(
      ':enter',
      stagger('200ms', [
        animate(
          '.8s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(15px)',
              offset: 0.3
            }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);
