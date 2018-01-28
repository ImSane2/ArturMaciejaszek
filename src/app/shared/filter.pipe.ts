import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, objectProperty: string): any {
    if (value.lenght === '0' || filterString === '' || filterString === undefined) {
      return value;
    }
    filterString = filterString.toLowerCase();
    const resultArray = [];
    for (const item of value) {
      for (const tag of item[objectProperty]) {
        let tagCheck: any;
        if (tag.includes(filterString)) {
          tagCheck = item;
          if (!resultArray.includes(tagCheck)) {
            resultArray.push(item);
          }
        }
      }
      }
      if (resultArray.length > 0) {
        return resultArray;
      } else {
        return [];
      }
    }
  }



