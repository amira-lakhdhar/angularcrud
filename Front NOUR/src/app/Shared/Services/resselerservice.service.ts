import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class ResselerserviceService {
  constructor(private http: HttpClient) {}

  getallresselers() {
    let data = this.http.get<any>(
      `${AppConfig.resellerUrl}/getresellers`
    );
    return data;
  }

  getResellerById(id: any) {
    return this.http.get<any>(`${AppConfig.resellerUrl}/${id}`);
  }

  deleteReseller(id: any) {
    return this.http.delete<any>(`${AppConfig.resellerUrl}/${id}`);
  }

  removeLogo(logo: any) {
    return this.http.post<any>(`${AppConfig.resellerUrl}/remove` , logo);
  }
  getAllRessellersWithStatus (status :string) { 
    return this.http.get<any>(`${AppConfig.resellerUrl}/getResellerByStatus/${status}` ) 
  }   
 
  updateformateur( id : any , user : any ){ 
    return this.http.post<any>(`${AppConfig.resellerUrl}/modify/${id}` , user) 
  }
  
  setStatus( user : any ){ 
    return this.http.post<any>(`${AppConfig.resellerUrl}/setStatus`  , user) 
  }
}
