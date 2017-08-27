import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priref'
})
export class PrirefPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
