import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-reseller-invoices',
  templateUrl: './reseller-invoices.component.html',
  styleUrls: ['./reseller-invoices.component.css']
})
export class ResellerInvoicesComponent implements OnInit {

  constructor(public translateService: TranslateService,
) { }

  ngOnInit(): void {
  }

}
