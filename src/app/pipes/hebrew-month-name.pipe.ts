import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'hebrewMonthName'})
export class HebrewMonthNamePipe implements PipeTransform {
  transform(value: string): string {
    switch(value.toUpperCase()) {
      case 'JAN': {
        return 'ינו';
      }
      case 'FEB': {
        return 'פבר';
      }
      case 'MAR': {
        return 'מרץ';
      }
      case 'APR': {
        return 'אפר';
      }
      case 'MAY': {
        return 'מאי';
      }
      case 'JUN': {
        return 'יונ';
      }
      case 'JUL': {
        return 'יול';
      }
      case 'AUG': {
        return 'אוג';
      }
      case 'SEP': {
        return 'ספט';
      }
      case 'OCT': {
        return 'אוק';
      }
      case 'NOV': {
        return 'נוב';
      }
      case 'DEC': {
        return 'דצמ';
      }
    }

    return value.toUpperCase();
  }
}
