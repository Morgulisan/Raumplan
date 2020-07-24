import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService implements OnInit{

  constructor(private readonly http: HttpClient) {

  }

  static dataBirth;
  static dataCache : DataStruct | null = null;
  static dataObservable$ : Observable<DataStruct>;

  ngOnInit() {
    if(DataProviderService.dataCache == null || Date.now() - DataProviderService.dataBirth > 120000 ) {
      DataProviderService.dataObservable$ = this.http.get<DataStruct>('http://steam-tools.net/test/MST/webapp/raumplan/backend/update.php');
      DataProviderService.dataObservable$.subscribe(
        Data => {
          DataProviderService.dataCache = Data;
          DataProviderService.dataBirth = Date.now();
          console.log(DataProviderService.dataCache);
        }
      )
    }
  }

  static initialize(data : DataStruct){
    if(this.dataCache == null){
      this.dataCache = data;
    }
  }

  static getData(){
    return this.dataCache;
  }

  static getRooms(){
    return this.dataCache.Rooms;
  }

  static getDates(){
    return this.dataCache.Dates;
  }

  static getUser(){
    return this.dataCache.Partecipants;
  }

  static getDatastructObservable(dp : DataProviderService ){
    if(DataProviderService.dataCache == null || DataProviderService.dataObservable$ == null || Date.now() - DataProviderService.dataBirth > 120000 ){
      DataProviderService.dataObservable$ = dp.http.get<DataStruct>('http://steam-tools.net/test/MST/webapp/raumplan/backend/update.php');
      DataProviderService.dataObservable$.subscribe(
        Data => {
          DataProviderService.dataCache = Data;
          DataProviderService.dataBirth = Date.now();
          console.log(DataProviderService.dataCache);
        }
      )
    }
   return DataProviderService.dataObservable$;
  }


}

export class Room {
  id: number;
  name: string;
  img: string;
}
export class DateModel{

  constructor(day, r,o,t,d,s,n = null) {
    this.day = day;
    this.room = r;
    this.owner = o;
    this.dateTime = t;
    this.dateDuration = d;
    this.type = s;
    this.name = n;
  }

  setId(id){
    this.id = id;
  }

  day: number;
  id: number | null = null;
  room: number;
  owner: number;
  dateTime: number;
  dateDuration: number;
  type: string;
  name: string | null = null;
}

export class User {
  fk: number;
  number: number;
  name: string;
}

export class DataStruct {
  Rooms : Room[];
  Dates: DateModel[];
  Partecipants: User[];
}

