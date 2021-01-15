import {Component, Input, OnInit} from '@angular/core';
import {DateModel} from "../../shared/data-provider.service";

@Component({
  selector: 'app-raum-termin',
  templateUrl: './room-view-booking.component.html',
  styleUrls: ['./room-view-booking.component.scss']
})
export class RoomViewBookingComponent implements OnInit {
  @Input() dateModel : DateModel;


  offset: string;
  width: string;

  constructor() { }

  ngOnInit() {
    this.offset =  (51 + 25 * (this.dateModel.dateTime - 20)) + 'px';
    this.width = (25 * this.dateModel.dateDuration - 2) + 'px';
  }

}
