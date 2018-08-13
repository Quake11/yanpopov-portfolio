import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.scss']
})
export class MacbookComponent implements OnInit {
  @Input() active: boolean;
  constructor() {}

  ngOnInit() {}
}
