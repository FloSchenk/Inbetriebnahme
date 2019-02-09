import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboardGridGutterSize'
})
export class DashboardGridGutterSizePipe implements PipeTransform {

  transform(windowSize: number): string {
    if (windowSize < 455) {
      return '10px';
    } else if (windowSize < 800) {
      return '20px';
    } else {
      return '50px';
    }
  }
}
