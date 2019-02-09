import { DashboardGridColsPipe } from '../../dashboard-grid-cols.pipe';
import { AppTitleService } from 'src/app/services/app-title.service';
import { Component, OnInit } from '@angular/core';
import { DashboardGridGutterSizePipe } from 'src/app/dashboard-grid-gutter-size.pipe';
import { DashboardGridRowHeightPipe } from 'src/app/dashboard-grid-row-height.pipe';

@Component({
  selector: 'dashboard-dialog',
  templateUrl: './dashboard.dialog.html',
  styleUrls: ['./dashboard.dialog.scss']
})
export class DashboardDialog implements OnInit {

  rowHeight: string;
  cols: number;
  gutterSize: string;
  favorites = [{
    name: 'TransportUnitDialog',
    link: './transport-units',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }, {
    name: 'TransportOrderDialog',
    link: './transport-orders',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }, {
    name: 'TransportUnitDialog',
    link: './transport-units',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }, {
    name: 'TransportOrderDialog',
    link: './transport-orders',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }];

  constructor(
    private _appTitleService: AppTitleService,
    private _dashboardGridColsPipe: DashboardGridColsPipe,
    private _dashboardGridGutterSizePipe: DashboardGridGutterSizePipe,
    private _dashboardGridRowHeightPipe: DashboardGridRowHeightPipe,
  ) { }

  ngOnInit() {
    this._appTitleService.setAppTitle('Dashboard');
    this.rowHeight = this._dashboardGridRowHeightPipe.transform(window.innerWidth);
    this.cols = this._dashboardGridColsPipe.transform(window.innerWidth);
    this.gutterSize = this._dashboardGridGutterSizePipe.transform(window.innerWidth);
  }

  onResize(event) {
    this.rowHeight = this._dashboardGridRowHeightPipe.transform(event.target.innerWidth);
    this.cols = this._dashboardGridColsPipe.transform(event.target.innerWidth);
    this.gutterSize = this._dashboardGridGutterSizePipe.transform(event.target.innerWidth);
  }

  click(element) {
    console.log('test');
  }
}
