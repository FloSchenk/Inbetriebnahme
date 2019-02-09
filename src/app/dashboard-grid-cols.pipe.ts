import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboardGridCols'
})
export class DashboardGridColsPipe implements PipeTransform {

  transform(windowSize: number): number {
    if (windowSize < 455) {
      return 1;
    } else if (windowSize < 800) {
      return 2;
    } else {
      return 3;
    }
  }
}
