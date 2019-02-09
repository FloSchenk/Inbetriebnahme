import { TransportOrder } from './objects/transport-order';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isTOActive'
})
export class IsTOActivePipe implements PipeTransform {

  transform(to: TransportOrder, args?: any): any {
    if (to != null) {
      return to.isActive;
    }
    return false;
  }

}
