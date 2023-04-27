import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]=[];

  readonly API_URL = "http://localhost:8087"
  readonly ENDPOINT_USER= "/user/"
    constructor(private httpClient : HttpClient)
    {
     }
  
     getUsers(){
      return this.httpClient.get(this.API_URL+this.ENDPOINT_USER+"afficherAllUser")
     }
     getUserById(id: any) {
return this.httpClient.get(this.API_URL+this.ENDPOINT_USER+"findByCin/${id}" )


     }
     //delete one user
//DeleteUser(id:number){
//  return this.httpClient.delete(this.API_URL+this.ENDPOINT_USER+"deletebyid"${id});}

// delete all users
DeleteAllUsers(){
  return this.httpClient.delete(
    this.API_URL+this.ENDPOINT_USER+"deleteUsers");
}
Delete(id:any){
  this.httpClient.delete(id).subscribe({
    next: ()=>this.users = this.users.filter((p)=>p.userId != id)
  });

}
}
