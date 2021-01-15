import { Component, OnInit, Input } from '@angular/core';
import {DateModel, Room} from "../shared/data-provider.service";
import {DatesDataSource} from "../bookig-tool-data-data-source.service";

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  @Input() roomData: Room;
  @Input() dates : DateModel[];
  @Input() datastruct: any;

  constructor(readonly rpDates: DatesDataSource) { }

  ngOnInit() {
  }

}
