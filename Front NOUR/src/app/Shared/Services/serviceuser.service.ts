import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Router } from '@angular/router';
import { AppConfig } from '../app.config';
@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  private myuser:User = new User();


  getUser(){
    return this.myuser;
  }


  constructor(private http:HttpClient,private router : Router ) { } 

  adduser(user: any) {

    return this.http.post<any>( `${AppConfig.resellerUrl}/signup`, user) ; 
  }
 
  loginuser(user:any){
    return this.http.post<any>( `${AppConfig.authUrl}/signin`,user) ; 
  }
  logout() {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
}
}


