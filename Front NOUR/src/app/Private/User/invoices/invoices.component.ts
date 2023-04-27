import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from 'src/app/Shared/Services/lazy-load-script.service.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor(private lazyLoadService: LazyLoadScriptService) {}

  ngOnInit(): void { 
    this.lazyLoadService.loadExternalScripts("../assets/js/echarts-example.js").then(() => {}).catch(() => {});        

  }

}
