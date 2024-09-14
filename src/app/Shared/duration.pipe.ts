import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, format: string) {
    var convertedString;
    if (format == 'hoursonly') {
      convertedString = value / 60 + 'hrs';
    } else if (format == 'hoursandminutes') {
      convertedString =
        Math.floor(value / 60) +
        'hrs' +
        (value % 60 > 0 ? 'and' + (value % 60) + 'minus' : '');
    } else {
      convertedString = value;
    }
    return convertedString;
  }
}
