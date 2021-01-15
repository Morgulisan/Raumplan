import {Component, OnInit} from '@angular/core';
import {DatesDataSource, RaumDataSource, BookigToolDataDataSource} from "./bookig-tool-data-data-source.service";

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [BookigToolDataDataSource, DatesDataSource, RaumDataSource]
})

export class AppComponent implements OnInit{

  constructor(public readonly raumDataSource : RaumDataSource) {
  }


  ngOnInit() {

  }

  name = 'Raumplan';
  title: 'raumplan';

}

