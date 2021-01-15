import {Component, Input} from '@angular/core';
import {DataStruct} from "../shared/data-provider.service";
import {BookigToolDataDataSource} from "../bookig-tool-data-data-source.service";

@Component({
  selector: 'app-tagesansicht',
  templateUrl: './daily-bookings-view.component.html',
  styleUrls: ['./daily-bookings-view.component.css']
})
export class DailyBookingsViewComponent {
  @Input() datastruct: DataStruct;

  public hide = true;

  constructor(public readonly rpDataSource: BookigToolDataDataSource) {

  }

  /*neuerTermin(e){
    e.stopPropagation();
   // alert("Event: "+ e.toString());
    console.log(e);
    console.log(e.offsetY);


    const neu = e.srcElement.getElementsByClassName('neu');
    console.log(neu);
    this.hide = !this.hide;
  }*/
}
