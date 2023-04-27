import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reseller-dashboard',
  templateUrl: './reseller-dashboard.component.html',
  styleUrls: ['./reseller-dashboard.component.css']
})
export class ResellerDashboardComponent implements OnInit {

  constructor(public translateService: TranslateService,
    ) { }

  ngOnInit(): void {
  }

}
