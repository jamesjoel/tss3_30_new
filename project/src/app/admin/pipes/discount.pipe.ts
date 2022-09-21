import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:any, b:any) {
    let x = b*a/100;
    let y = b-x;
    return y;
  }

}
