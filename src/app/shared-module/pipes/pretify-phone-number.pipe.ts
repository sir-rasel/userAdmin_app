import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pretifyPhoneNumber'
})
export class PretifyPhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    value = value.trim();
    if(value.startsWith('+88')){
      return '(+88) ' + value.slice(3);
    }
    else if(value.startsWith('(+88)')){
      return value;
    }
    else {
      return '(+88) ' + value;
    }
  }

}
