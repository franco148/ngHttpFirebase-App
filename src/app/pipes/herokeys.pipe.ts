import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'herokeys',
  pure: false
})
export class HerokeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];

    for(let key in value) {
      keys.push(key);
    }

    return keys;
  }

}
