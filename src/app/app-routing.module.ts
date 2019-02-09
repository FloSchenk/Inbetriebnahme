import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportUnitDialog } from './dialogs/transport-unit/transport-unit.dialog';
import { TransportOrderDialog } from './dialogs/transport-order/transport-order.dialog';
import { DashboardDialog } from './dialogs/dashboard/dashboard.dialog';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: DashboardDialog },
  { path: 'dashboard', component: DashboardDialog },
  { path: 'transport-units', component: TransportUnitDialog },
  { path: 'transport-units/details/:tuId', component: DetailsComponent },
  { path: 'transport-units/:filter', component: TransportUnitDialog },
  { path: 'transport-orders', component: TransportOrderDialog }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
