import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(array: any[], text: string = '', field: string = 'title'): any[] {
    text = text.trim();
    if (text === '') { return array; }
    if (!array){ return [];}
    return array.filter((item) =>
      item[field].toLowerCase().includes(text.toLowerCase())
    );
  }
}
