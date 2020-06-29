import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataStruct} from "./shared/data-provider.service";

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit{

  constructor(private readonly http: HttpClient) {
  }
  newDataStruct$;



  ngOnInit() {
    this.newDataStruct$ = this.http.get('http://steam-tools.net/test/MST/webapp/raumplan/backend/update.php');
    this.newDataStruct$.subscribe(
      Data => {
        this.datastruct = Data; //bad Practice
        console.log(this.datastruct);
      }

    )
  }

  name = 'Raumplan';
  datastruct : DataStruct;
  title: 'raumplan';


}

