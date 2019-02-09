import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboardGridRowHeight'
})
export class DashboardGridRowHeightPipe implements PipeTransform {

  transform(windowSize: number): string {
    if (windowSize < 455) {
      return '2:1';
    } else if (windowSize < 800) {
      return '1:1';
    } else {
      return '1:1';
    }
  }

}
