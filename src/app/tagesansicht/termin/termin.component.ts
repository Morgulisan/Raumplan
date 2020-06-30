import { Component, OnInit, Input } from '@angular/core';
import {DateModel} from "../../shared/data-provider.service";

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.scss']
})
export class TerminComponent implements OnInit {
  @Input() dateModel: DateModel;

  top: string;
  height: string;

  ngOnInit() {
    this.top =  ((this.dateModel.dateTime - 24) * 12.5 + 31) + 'px';
    this.height = (12.5 * this.dateModel.dateDuration - 2) + 'px';
  }
}
