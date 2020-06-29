import {Component, Input} from '@angular/core';
import {DataStruct} from "../shared/data-provider.service";

@Component({
  selector: 'app-tagesansicht',
  templateUrl: './tagesansicht.component.html',
  styleUrls: ['./tagesansicht.component.css']
})
export class TagesansichtComponent {
  @Input() datastruct: DataStruct;

  public hide = true;

  constructor() {}

  neuerTermin(e){
    e.stopPropagation();
   // alert("Event: "+ e.toString());
    console.log(e);
    console.log(e.offsetY);


    const neu = e.srcElement.getElementsByClassName('neu');
    console.log(neu);
    this.hide = !this.hide;
  }
}
