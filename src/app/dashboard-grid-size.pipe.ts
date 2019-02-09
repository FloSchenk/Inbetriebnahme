import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboardGridSize',
  pure: true
})
export class DashboardGridSizePipe implements PipeTransform {

  transform(cols: number): string {
    console.log('test');
    if (cols === 1) {
      return 'large';
    } else if (cols === 2) {
      return 'medium';
    } else {
      return 'small';
    }
  }
}
