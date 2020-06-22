import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.css']
})
export class TerminComponent implements OnInit {
  @Input() bookerName: string;
  @Input() bookerImg = '';
  @Input() eventName: string;
  @Input() time: number;
  @Input() duration: number;
  top: string;
  height: string;

  ngOnInit() {
    this.top =  ((this.time - 6) * 50 + 31) + 'px';
    this.height = (12.5 * this.duration - 2) + 'px';
  }
}
