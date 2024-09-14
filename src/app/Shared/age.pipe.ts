import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any): number {
 
    let currentYear: any = new Date().getFullYear(); // Current Year
    let dobYear: any = new Date(value).getFullYear(); // DOB Year
    return currentYear - dobYear;
  }
}
