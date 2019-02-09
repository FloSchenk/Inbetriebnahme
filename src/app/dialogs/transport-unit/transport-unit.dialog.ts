import { AppTitleService } from './../../services/app-title.service';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { TransportUnit } from '../../objects/transport-unit';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

/* Metadata of the Component */
@Component({
  selector: 'transport-unit-dialog',
  styleUrls: ['transport-unit.dialog.scss'],
  templateUrl: 'transport-unit.dialog.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransportUnitDialog implements OnInit {

  /* HTML-Template Elements */
    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

  /* Class variables for HTML-Template and TS-Logic */
    columnsToDisplay = ['name', 'type', 'location', 'order', 'error'];
    dataSource: MatTableDataSource<TransportUnit>;
    expandedElement: TransportUnit | null;
    filter: string;
    maxItems: number;
    panelOpenState = false;
    queryMode = 'indeterminate';
    searchValue: string;

  /* Inject the Service */
    constructor(
      private _tuService: TransportUnitService,
      private _appTitleService: AppTitleService,
      private route: ActivatedRoute,
      private location: Location
    ) { }

  /**
   * Lifecycle-hook for the creation of the app.
   */
  ngOnInit(): void {
    this._appTitleService.setAppTitle('TransportUnits');
    this._appTitleService.setDetailsView(false);

    this.route.paramMap.subscribe(params => {
      this.filter = params.get('filter');
    });
    this.dataSource = new MatTableDataSource<TransportUnit>();
    this.loadData();
    this.dataSource.paginator = this.paginator;
    this.paginator.getNumberOfPages = () => this.maxItems / this.paginator.pageSize;
    this.dataSource.sortingDataAccessor = (item, property) => this.sortingDataAccessor(item, property);
    this.dataSource.sort = this.sort;
  }

  /**
   * Loads the data from the service and bind it to the class when finished.
   * Also change progressbar to 'determinate' in order to disappear.
   *
   * @Param filter (optional): Filter
   *
   */
  loadData(): void {
    this._tuService.getAllTransportUnits(this.filter).subscribe(data => {
      this.dataSource.data = data;
      this.queryMode = 'determinate';
    });
    this._tuService.getAllTransportUnitsCount(this.filter).subscribe(data => this.maxItems = data);
  }

  /**
   * Sets the clientside filter and resets the paginator
   *
   * @Param filter: Filter
   */
  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Sets the serverside filter as url parameter, send a new data request with filter and resets the paginator
   */
  search(): void {
    this.location.replaceState('transport-units/' + this.filter);
    this.loadData();
    this.dataSource.paginator.firstPage();
  }

  /**
   * Reffer the property of the item.
   * This is needed because the table can't handle nested objects
   *
   * @Param item: The item from the table
   * @Param property: Called property on the item
   */
  sortingDataAccessor(item, property): any {
    switch (property) {
      /* nested properties of item */
      case 'type': return item.type.name;
      case 'location': return item.location.name;
      case 'order': return item.activeTransportOrder.isActive;
      case 'error': return item.location.hasTu;

      /* direct properties of item */
      default: return item[property];
    }
  }

  /**
   * Resets the filter value
   */
  resetFilter(): void {
    this.filter = '';
  }
}
