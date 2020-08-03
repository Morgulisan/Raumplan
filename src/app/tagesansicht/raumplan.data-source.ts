import {HttpDataSource, RxapHttpDataSource} from "@rxap/data-source/http";
import {Injectable} from "@angular/core";

@RxapHttpDataSource({
  id: 'raumplan',
  url: 'http://steam-tools.net/test/MST/webapp/raumplan/backend/update.php',
})
@Injectable()
export class RaumplanDataSource extends HttpDataSource {



}
