import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-raum-termin',
  templateUrl: './raum-termin.component.html',
  styleUrls: ['./raum-termin.component.scss']
})
export class RaumTerminComponent implements OnInit {
  @Input() terminName: string;
  @Input() bookerName: string;
  @Input() time;
  @Input() duration;

  offset: string;
  width: string;

  constructor() { }

  ngOnInit() {
    this.offset =  (50 + 100 * (this.time - 5)) + 'px';
    this.width = (25 * this.duration - 2) + 'px';
  }

}
