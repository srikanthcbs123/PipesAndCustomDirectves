import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(value: string, formatter: string): string {

    if (formatter.toLocaleLowerCase() === 'male') {
      return 'Mr. ' + value;
    } else {
      return 'Mrs. ' + value;
    }
  }
}
