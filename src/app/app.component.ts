import {Component, OnInit} from '@angular/core';
import {DatesDataSource, RaumDataSource, RaumplanDataDataSource} from "./RaumplanData.data-source";

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [RaumplanDataDataSource, DatesDataSource, RaumDataSource]
})

export class AppComponent implements OnInit{

  constructor(public readonly raumDataSource : RaumDataSource) {
  }


  ngOnInit() {

  }

  name = 'Raumplan';
  title: 'raumplan';

}

