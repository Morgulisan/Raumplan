import {Component, Input, OnInit} from '@angular/core';
import {DataStruct} from "../shared/data-provider.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RaumplanDataSource} from "./raumplan.data-source";
import {HttpDataSourceViewer} from "@rxap/data-source/http";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-tagesansicht',
  templateUrl: './tagesansicht.component.html',
  styleUrls: ['./tagesansicht.component.css'],
  providers: [RaumplanDataSource]
})
export class TagesansichtComponent implements OnInit {
  @Input() datastruct: DataStruct;

  public hide = true;

  public date$: Observable<Date>;
  public viewer: HttpDataSourceViewer;

  constructor(
    public readonly rpDataSource: RaumplanDataSource,
    private readonly route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.date$ = this.route.parent!.params.pipe(
      map(params => new Date(Number(params.year), Number(params.month) - 1, Number(params.day))),
    );
    this.viewer = {
      id: 'tagesansicht',
      viewChange: this.date$.pipe(
        map(date => ({
          params: new HttpParams({
            fromObject: {
              year: date.getFullYear().toFixed(0),
              month: date.getMonth().toFixed(0),
              day: date.getDate().toFixed(0),
            }
          })
        })),
      )
    }
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
