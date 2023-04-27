import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  readonly API_URL = "http://localhost:8089"

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllInvoices() {
    return this.httpClient.get(this.API_URL + '/invoice/afficherAllInvoice')
  }

  postInvoices(data : any){
    return this.httpClient.post(this.API_URL + '/invoice/addInvoice/EUR/TND' , data)
  }
}
