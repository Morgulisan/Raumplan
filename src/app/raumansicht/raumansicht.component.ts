import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raumansicht',
  templateUrl: './raumansicht.component.html',
  styleUrls: ['./raumansicht.component.css']
})
export class RaumansichtComponent implements OnInit {
  @Input() roomName: string;
  @Input() roomImage: string;
  @Input() test: string;
  @Input() date;
  @Input() datestring: string;
  @Input() datastruct: any;

  constructor() { }

  ngOnInit() {
  }

  openDialog() {
    console.log(this.roomName);
  }
}
