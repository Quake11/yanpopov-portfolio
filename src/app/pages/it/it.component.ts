import { Component, OnInit, Renderer2 } from '@angular/core';
import { fadeInFromBottom } from '../../animations/fade-in';
import { list } from '../../animations/list';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss'],
  animations: [list, fadeInFromBottom]
})
export class ItComponent implements OnInit {
  classes: Array<any> = [
    {
      name: '5 класс',
      url: 'https://drive.google.com/drive/folders/0B5wIFvFgJ7GNWVJULXd4d3N4MWM'
    },
    {
      name: '6 класс',
      url: 'https://drive.google.com/drive/folders/0B5wIFvFgJ7GNYTlJM1lGdFUyWFE'
    },
    {
      name: '7 класс',
      url: 'https://drive.google.com/drive/folders/0B5wIFvFgJ7GNUmJJUndFNFMxc00'
    },
    {
      name: '8 класс',
      url: 'https://drive.google.com/drive/folders/0B5wIFvFgJ7GNbWZaaVNlZ2JCV00'
    },
    {
      name: '9 класс',
      url: 'https://drive.google.com/drive/folders/0B5wIFvFgJ7GNRFZBS1RTZ1JLUzg'
    },
    {
      name: '11 класс',
      url: 'https://drive.google.com/drive/folders/0B5wIFvFgJ7GNdXVWZi16akRhNlE'
    }
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  mouseOver(event) {
    this.renderer.addClass(event.currentTarget, 'mat-elevation-z15');
  }

  mouseOut(event) {
    this.renderer.removeClass(event.currentTarget, 'mat-elevation-z15');
  }
}
