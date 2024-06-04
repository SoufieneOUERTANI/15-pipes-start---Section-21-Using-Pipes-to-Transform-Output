import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return value.split("").reverse().join("");
  }

}
