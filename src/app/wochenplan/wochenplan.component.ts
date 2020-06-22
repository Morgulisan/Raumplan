import { Component, OnInit, Inject } from '@angular/core';
import { TerminComponent } from '../termin/termin.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-wochenplan',
  templateUrl: './wochenplan.component.html',
  styleUrls: ['./wochenplan.component.css']
})
export class WochenplanComponent {
  public hide = true;

  constructor() {}

  neuerTermin(e){
    e.stopPropagation();
   // alert("Event: "+ e.toString());
    console.log(e);
    console.log(e.offsetY);


    let neu = e.srcElement.getElementsByClassName("neu");
    console.log(neu);
    this.hide = !this.hide;
  }
}
