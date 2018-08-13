import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

declare var Snap: any;
declare var mina: any;

@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.scss']
})
export class AtomComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.atom();
  }

  atom() {
    let map,
      green_electron,
      red_electron,
      yellow_electron,
      green_electronbbox,
      red_electronbbox,
      yellow_electronbbox,
      flight_path_green,
      flight_path_green_length,
      flight_path_red,
      flight_path_red_length,
      flight_path_yellow,
      flight_path_yellow_length;

    // const last_point: any = 0;

    map = Snap('#atom');
    green_electron = map.select('#greenelectron');
    green_electronbbox = green_electron.getBBox();
    red_electron = map.select('#redelectron');
    red_electronbbox = red_electron.getBBox();
    yellow_electron = map.select('#yellowelectron');
    yellow_electronbbox = yellow_electron.getBBox();

    flight_path_green = map
      .path(
        'M30 35c51,-5 102,102 114,238 13,136 -18,250 -69,254 -50,5 -101,-102 -114,-238 -12,-136 19,-250 69,-254z'
      )
      .attr({ fill: 'none', stroke: 'none' });
    flight_path_red = map
      .path(
        'M30 35c21,45 -61,128 -183,185 -122,57 -238,67 -259,21 -21,-45 60,-128 182,-185 123,-57 239,-70 265,-25z'
      )
      .attr({ fill: 'none', stroke: 'none' });
    flight_path_yellow = map
      .path(
        'M30 35c-21,45 60,128 182,185 122,57 239,67 260,21 21,-45 -61,-128 -183,-185 -122,-57 -238,-66 -259,-25z'
      )
      .attr({ fill: 'none', stroke: 'none' });

    flight_path_green_length = Snap.path.getTotalLength(flight_path_green);
    flight_path_red_length = Snap.path.getTotalLength(flight_path_red);
    flight_path_yellow_length = Snap.path.getTotalLength(flight_path_yellow);

    timer(0, 3510).subscribe(x => {
      this.animation(
        green_electron,
        green_electronbbox,
        flight_path_green,
        flight_path_green_length,
        3500
      );
    });

    timer(0, 1710).subscribe(x => {
      this.animation(
        red_electron,
        red_electronbbox,
        flight_path_red,
        flight_path_red_length,
        1700
      );
    });

    timer(0, 1310).subscribe(x => {
      this.animation(
        yellow_electron,
        yellow_electronbbox,
        flight_path_yellow,
        flight_path_yellow_length,
        1300
      );
    });
  }

  animation(obj, bbox, path, length, time) {
    Snap.animate(
      0,
      length,
      function(step) {
        const moveToPoint = Snap.path.getPointAtLength(path, step);
        const x = moveToPoint.x - bbox.width / 2;
        const y = moveToPoint.y - bbox.height / 2;
        obj.transform(
          'translate(' +
            x +
            ',' +
            y +
            ') rotate(' +
            (moveToPoint.alpha - 90) +
            ', ' +
            bbox.cx +
            ', ' +
            bbox.cy +
            ')'
        );
      },
      time,
      mina.linear
    );
  }
}
