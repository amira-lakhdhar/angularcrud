import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from 'src/app/Shared/Services/lazy-load-script.service.service';
import {Invoices} from 'src/app/Shared/Models/invoices' 
import { InvoicesService } from 'src/app/Shared/Services/invoices.service';
import { ArticlesService } from 'src/app/Shared/Services/articles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor(private toastr: ToastrService , private lazyLoadService: LazyLoadScriptService , private invoiceService : InvoicesService , private articleService : ArticlesService) {}

  invoice = new Invoices()
  allInvoices : any
  allArticles : any
  listeArticle : any

  ngOnInit(): void { 
    this.lazyLoadService.loadExternalScripts("../assets/js/echarts-example.js").then(() => {}).catch(() => {});        
    this.getAllInvoices()
    this.getAllArticle()
    
  }

  selectArticle(event:any){
    this.listeArticle = event.value
    this.invoice.articles = this.listeArticle
    console.log(this.listeArticle )

  }

  addInvoices(){
    this.invoice.zoneId = 1 
    this.invoice.userId = 1
    this.invoice.totalPrice = 0
    this.invoice.dateCreationInvoice = new Date()
    console.log(this.invoice)
    this.invoiceService.postInvoices(this.invoice).subscribe(res=>{
      this.toastr.success('Invoices updated successfuly', 'Success');
      this.getAllInvoices()
      this.invoice = new Invoices()
      this.listeArticle = null
    } , (err : any)=>{
      this.toastr.error('Error 404', 'Success');
      this.getAllInvoices()
      this.invoice = new Invoices()
      this.listeArticle = null
    })
  }

  getAllArticle(){
    this.articleService.getAllArticles().subscribe(res=>{
      this.allArticles = res
      console.log(this.allArticles)
    })
  }

  getAllInvoices(){
    this.invoiceService.getAllInvoices().subscribe(res=>{
      this.allInvoices = res
      
      console.log(this.allInvoices)
    })
  }

}
