import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModules } from './material.modules';
import { MainComponent } from './main.component';
import { AppTitleService } from './services/app-title.service';
import { TransportOrderService } from './services/transport-order.service';
import { TransportUnitService } from './services/transport-unit.service';
import { TransportUnitDialog } from './dialogs/transport-unit/transport-unit.dialog';
import { TransportOrderDialog } from './dialogs/transport-order/transport-order.dialog';
import { DashboardDialog } from './dialogs/dashboard/dashboard.dialog';
import { AppRoutingModule } from './app-routing.module';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { IsTOActivePipe } from './is-toactive.pipe';
import { DashboardGridGutterSizePipe } from 'src/app/dashboard-grid-gutter-size.pipe';
import { DashboardGridRowHeightPipe } from './dashboard-grid-row-height.pipe';
import { DashboardGridColsPipe } from './dashboard-grid-cols.pipe';
import { DashboardGridSizePipe } from './dashboard-grid-size.pipe';
import { LoginDialog } from './dialogs/login/login.dialog';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    DashboardGridGutterSizePipe,
    DashboardGridColsPipe,
    DashboardGridSizePipe,
    DashboardGridRowHeightPipe,
    DashboardGridGutterSizePipe,
    MainComponent,
    DashboardDialog,
    TransportUnitDialog,
    TransportOrderDialog,
    CheckboxComponent,
    IsTOActivePipe,
    LoginDialog,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [
  ],
  providers: [
    DashboardGridGutterSizePipe,
    DashboardGridColsPipe,
    DashboardGridRowHeightPipe,
    DashboardGridSizePipe,
    AppTitleService,
    TransportUnitService,
    TransportOrderService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
