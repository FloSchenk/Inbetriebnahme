import { AppTitleService } from './../../services/app-title.service';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { TransportUnit } from '../../objects/transport-unit';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'transport-order-dialog',
  styleUrls: ['transport-order.dialog.scss'],
  templateUrl: 'transport-order.dialog.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransportOrderDialog implements OnInit {
  /* Load Elements from Template */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /* Data for Template */
  dataSource: MatTableDataSource<TransportUnit>;
  columnsToDisplay = ['name', 'type', 'location', 'order', 'error'];
  expandedElement: TransportUnit | null;

  /* Inject the Service */
  constructor(
    private _tuService: TransportUnitService,
    private _appTitleService: AppTitleService,
    ) { }

  /* Lifcycle-Hook onCreation */
  ngOnInit() {
    this._appTitleService.setAppTitle('TransportOrders');
    this.dataSource = new MatTableDataSource<TransportUnit>();
    this.loadData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* Load data from Service */
  loadData() {
    this._tuService.getAllTransportUnits().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  /* Filter Function */
  applyFilter(filterValue: string) {
    /* Set Filter String to DataSource */
    this.dataSource.filter = filterValue.trim().toLowerCase();

    /* Reset the Paginator Page */
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
