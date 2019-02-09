
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AppTitleService } from './services/app-title.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy, OnInit {
  /* Settings for general APP */
  appTitle: String;
  isDetailsView: boolean;
  loggedIn = false;

  /* Mobile Listener */
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  /* NavItems */
  navItems = [{
    routerLink: 'dashboard',
    name: 'Dashboard',
    icon: './assets/icons/dark/dashboard.svg'
  }, {
    routerLink: 'transport-units',
    name: 'TransportUnits',
    icon: './assets/icons/dark/transport-unit.svg'
  }, {
    routerLink: 'transport-orders',
    name: 'TransportOrders',
    icon: './assets/icons/dark/transport-order.svg'
  }];
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public _appTitleService: AppTitleService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      this.loggedIn = true;

      this._appTitleService.title.subscribe( title => {
        console.log(title);
        this.appTitle = title;
      });
      this._appTitleService.isDetailsView.subscribe( isDetailsView => {
        console.log(isDetailsView);
        this.isDetailsView = isDetailsView;
      });
    }
  }

  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  navigateBack(): void {
    window.history.back();
  }

  changeDetailsView(event) {
    console.log(event);
  }
}
