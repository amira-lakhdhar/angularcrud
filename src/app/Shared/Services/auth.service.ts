import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_URL = "http://localhost:8087"
  readonly ENDPOINT_USER= "/api/auth/"
    constructor(private httpClient : HttpClient) { }

    addUser(user: any) {
      return this.httpClient.post(this.API_URL+this.ENDPOINT_USER+"signup",user);
    }
    
    createUser(us:User){
      return this.httpClient.post('${this.API_URL}',us);
    }
  }
