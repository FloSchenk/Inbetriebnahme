import { AppTitleService } from 'src/app/services/app-title.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  tuId: number;


  constructor(
    private route: ActivatedRoute,
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this._appTitleService.setDetailsView(true);

    this.route.paramMap.subscribe(params => {
      this.tuId = +params.get('tuId');
    });
  }

}
