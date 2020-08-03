import {PipeDataSource, RxapDataSource} from '@rxap/data-source';
import { HttpDataSource } from '@rxap/data-source/http';
import { Injectable } from '@angular/core';
import {DataStruct, DateModel} from "./shared/data-provider.service";
import {map, shareReplay} from "rxjs/operators";


@RxapDataSource({
  id: 'rxapDataStruct',
  url: 'http://steam-tools.net/test/MST/webapp/raumplan/backend/update.php'
})
@Injectable()
export class RaumplanDataDataSource extends HttpDataSource<DataStruct> {

}


@RxapDataSource({
  id: 'rxapDatesStruct',
})
@Injectable()
export class DatesDataSource extends PipeDataSource<DataStruct,DateModel[]>{
  constructor(public readonly rpDataSource: RaumplanDataDataSource) {
    super(rpDataSource, map((value:DataStruct) => value.Dates), shareReplay(1));
  }
}


@RxapDataSource({
  id: 'rxapRaumStruct',
})
@Injectable()
export class RaumDataSource extends PipeDataSource<DataStruct,DateModel[]>{
  constructor(public readonly rpDataSource: RaumplanDataDataSource) {
    super(rpDataSource, map((value:DataStruct) => value.Rooms), shareReplay(1));
  }
}

@RxapDataSource({
  id: 'rxapUserStruct',
})
@Injectable()
export class PartnerDataSource extends PipeDataSource<DataStruct,DateModel[]>{
  constructor(public readonly rpDataSource: RaumplanDataDataSource) {
    super(rpDataSource, map((value:DataStruct) => value.Partecipants));
  }
}
