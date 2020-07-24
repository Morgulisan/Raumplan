import { Component, OnInit, Input } from '@angular/core';
import {DateModel, Room} from "../shared/data-provider.service";
import {DatesDataSource} from "../RaumplanData.data-source";

@Component({
  selector: 'app-raumansicht',
  templateUrl: './raumansicht.component.html',
  styleUrls: ['./raumansicht.component.css']
})
export class RaumansichtComponent implements OnInit {

  @Input() roomData: Room;
  @Input() dates : DateModel[];
  @Input() datastruct: any;

  constructor(readonly rpDates: DatesDataSource) { }

  ngOnInit() {
  }

}
