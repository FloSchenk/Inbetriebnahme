import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class AppTitleService {

  appTitle: String;

  @Output() isDetailsView = new EventEmitter<boolean>();
  @Output() title = new EventEmitter<string>();

  constructor() { }

  setAppTitle(appTitle: string): void {
    this.title.emit(appTitle);
  }

  setDetailsView(detailsView: boolean): void {
    this.isDetailsView.emit(detailsView);
  }

}
