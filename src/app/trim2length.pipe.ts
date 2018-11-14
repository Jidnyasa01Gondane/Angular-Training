import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'trim2length'
})
export class Trim2lengthPipe implements PipeTransform {

  transform(data: string, length?: number): any {
    if (typeof data == 'string'){
      return data.substr(0,length);
    }
  }

}
