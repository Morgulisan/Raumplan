import {BaseDataSource, BaseDataSourceViewer, RxapDataSource} from "@rxap/data-source";
import {from, Observable, TeardownLogic} from "rxjs";
import {RaumplanDataDataSource} from "./RaumplanData.data-source";
import {switchMap, tap} from "rxjs/operators";
import {HttpParams} from "@angular/common/http";

@RxapDataSource({
  id: 'cache'
})
class CacheDataSource extends BaseDataSource {

  public cache: any[][] = [];

  constructor(private readonly dataSource: RaumplanDataDataSource) {
    super();
  }


  protected _connect(viewer: BaseDataSourceViewer<{ x: number, y: number }>): [Observable<any>, TeardownLogic] | Observable<any> {
    return viewer.viewChange.pipe(
      switchMap(change => {

        if (this.cache[change.x] && this.cache[change.x][change.y]) {
          return this.cache[change.x][change.y];
        }

        return from(this.dataSource.request$({
          params: new HttpParams(),
        })).pipe(
          tap(data => {
            this.cache[change.x][change.y] = data;
          })
        )

      })
    );
  }

}
