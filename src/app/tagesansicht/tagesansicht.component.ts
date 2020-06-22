import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tagesansicht',
  templateUrl: './tagesansicht.component.html',
  styleUrls: ['./tagesansicht.component.css']
})
export class TagesansichtComponent implements OnInit {
  @Input() name: string;
  @Input() roomImage: string;
  @Input() test: string;
  @Input() date;
  @Input() datestring: string;
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  openDialog() {
    console.log(this.name);
  }
}
