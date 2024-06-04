import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.sort((a,b)=>(a.name > b.name ? 1 : -1))
  }

}
