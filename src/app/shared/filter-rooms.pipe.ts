import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRooms'
})
export class FilterRoomsPipe implements PipeTransform {

  transform(items: any[], filter): any
  {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Room.indexOf(filter.Room) !== -1);
  }

}
