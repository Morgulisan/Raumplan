import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataProviderService, DataStruct} from "./shared/data-provider.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit{

  constructor(private readonly http: HttpClient) {
  }
  newDataStruct$ : Observable<DataStruct>;



  ngOnInit() {
    console.log("Starting");
    this.newDataStruct$ = DataProviderService.getDatastructObservable(new DataProviderService(this.http));
    this.newDataStruct$.subscribe(
      Data => {
        this.datastruct = Data;
        console.log(this.datastruct);
      }
    )
    /*this.newDataStruct$ = this.http.get<DataStruct>('http://steam-tools.net/test/MST/webapp/raumplan/backend/update.php');
    this.newDataStruct$.subscribe(
      Data => {
        this.datastruct = Data; //bad Practice
        console.log(this.datastruct);
      }
    )*/
  }

  name = 'Raumplan';
  datastruct : DataStruct;
  title: 'raumplan';

}

