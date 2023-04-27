import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-reseller-products',
  templateUrl: './reseller-products.component.html',
  styleUrls: ['./reseller-products.component.css']
})
export class ResellerProductsComponent implements OnInit {

  constructor(public translateService: TranslateService,
    ) { }
totalLength:any;
page:number=1;

  ngOnInit(): void {
   /* this._services.getpost()subscribeOn((result)=>
    this.showpost = result;
    this.totalLength= result.length;
    console.log(this.showpost))*/
  }

}
