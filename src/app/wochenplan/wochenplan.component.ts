import { Component, OnInit, Inject } from '@angular/core';

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


    const neu = e.srcElement.getElementsByClassName('neu');
    console.log(neu);
    this.hide = !this.hide;
  }
}
