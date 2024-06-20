import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
  standalone: true,
})
export class FilterTasksPipe implements PipeTransform {
  transform(value: any[], key: string, filterValue: any): any[] {
    if (!filterValue) {
      return value;
    }

    return value.filter(
      (v) => v[key].toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
    );
  }
}
