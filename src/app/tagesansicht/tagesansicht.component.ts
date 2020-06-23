import {Component, OnInit, Inject, Input} from '@angular/core';

@Component({
  selector: 'app-tagesansicht',
  templateUrl: './tagesansicht.component.html',
  styleUrls: ['./tagesansicht.component.css']
})
export class TagesansichtComponent {
  @Input() datastruct: any;

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
