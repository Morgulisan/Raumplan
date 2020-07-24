import {Component, Input} from '@angular/core';
import {DataStruct} from "../shared/data-provider.service";
import {RaumplanDataDataSource} from "../RaumplanData.data-source";

@Component({
  selector: 'app-tagesansicht',
  templateUrl: './tagesansicht.component.html',
  styleUrls: ['./tagesansicht.component.css']
})
export class TagesansichtComponent {
  @Input() datastruct: DataStruct;

  public hide = true;

  constructor(public readonly rpDataSource: RaumplanDataDataSource) {

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
