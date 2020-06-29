import {Component, Input, OnInit} from '@angular/core';
import {DateModel} from "../../shared/data-provider.service";

@Component({
  selector: 'app-raum-termin',
  templateUrl: './raum-termin.component.html',
  styleUrls: ['./raum-termin.component.scss']
})
export class RaumTerminComponent implements OnInit {
  @Input() dateModel : DateModel;


  offset: string;
  width: string;

  constructor() { }

  ngOnInit() {
    this.offset =  (51 + 25 * (this.dateModel.dateTime - 20)) + 'px';
    this.width = (25 * this.dateModel.dateDuration - 2) + 'px';
  }

}
