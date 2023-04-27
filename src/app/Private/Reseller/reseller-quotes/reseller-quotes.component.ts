import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-reseller-quotes',
  templateUrl: './reseller-quotes.component.html',
  styleUrls: ['./reseller-quotes.component.css']
})
export class ResellerQuotesComponent implements OnInit {

  constructor(public translateService: TranslateService,
    ) { }

  ngOnInit(): void {
  }

}
