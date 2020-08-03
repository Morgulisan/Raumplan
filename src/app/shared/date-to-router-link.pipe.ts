import { Pipe, PipeTransform } from '@angular/core';
import { addDays } from 'date-fns';

@Pipe({
  name: 'dateToRouterLink'
})
export class DateToRouterLinkPipe implements PipeTransform {

  transform(date: Date, add: number): string[] {
    const newDate = addDays(date, add);
    return [
      '/',
      newDate.getFullYear().toFixed(0),
      (newDate.getMonth() + 1).toFixed(0),
      newDate.getDate().toFixed(0)
    ]
  }

}
