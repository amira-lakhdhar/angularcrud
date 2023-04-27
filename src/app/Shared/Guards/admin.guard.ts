import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ServiceuserService } from '../Services/serviceuser.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router : Router,private userService : ServiceuserService ){} ; 

  canActivate()
  { 
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    if(!!token){
    if ( role == 'Admin')
    {
      return true;
    }  
  }         
    this.router.navigate(['login']);
    console.log("you don't have access rights");
    return false ;
  }
  
}
  

