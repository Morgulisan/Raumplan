import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService implements OnInit{

  constructor(private readonly http: HttpClient) {

  }

  dataObservable;
  dataCach : DataStruct;

  ngOnInit() {
    this.dataObservable = this.http.get('http://steam-tools.net/test/MST/webapp/raumplan/backend/update.php');
    this.dataObservable.subscribe(
      Data => {
        this.dataCach = Data;
        console.log(this.dataCach);
      }

    )
  }


  getData(){
    return this.dataCach;
  }

  getRooms(){
    return this.dataCach.Rooms;
  }

  getDates(){
    return this.dataCach.Dates;
  }

  getUser(){
    return this.dataCach.Partecipants;
  }


}

export class Room {
  id: number;
  name: string;
  img: string;
}
export class DateModel{
  id: number;
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
  Partecipants: [];
}

