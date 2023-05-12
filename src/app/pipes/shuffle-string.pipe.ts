import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffleString'
})
export class ShuffleStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').sort(() => Math.random() - 0.5).join('');
  }

}
