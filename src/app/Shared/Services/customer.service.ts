import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  
  getallCustomers() {
    let data = this.http.get<any>(
      `${AppConfig.clientUrl}` 
    );
    return data;
  }

  getcustomerById(id: any) {
    return this.http.get<any>(`${AppConfig.clientUrl}/${id}`);
  }

  addCustomer(customer: any) {
    return this.http.post<any>(
      `${AppConfig.clientUrl}/add`,
      customer
    );
  }


  deleteCustomer(id: any) {
    return this.http.delete<any>(`${AppConfig.clientUrl}/${id}`);
  }

  getAllCustomersWithStatus(status: string) {
    return this.http.get<any>(
      `${AppConfig.clientUrl}/getByStatus/${status}`
    );
  }

  updateCustomer(id: any, user: any) {
    return this.http.put<any>(
      `${AppConfig.clientUrl}/update/${id}`,
      user
    );
  }

  archiveCustomer(lastArchivedBy : any , id : any){
    return this.http.post<any>(
      `${AppConfig.clientUrl}/archive/${id}`,
      lastArchivedBy
    );
  }

  afficheCustomer(body : any , id : any){
    return this.http.post<any>(
      `${AppConfig.clientUrl}/afficher/${id}`,
      body
    );
  }

}
