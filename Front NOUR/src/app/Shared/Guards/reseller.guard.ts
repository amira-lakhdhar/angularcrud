import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceuserService } from '../Services/serviceuser.service';

@Injectable({
  providedIn: 'root'
})
export class ResellerGuard implements CanActivate {
  constructor(private router : Router,private userService : ServiceuserService ){} ; 

  canActivate()
  {     
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    if(!!token){
    if ( role == 'Reseller')
    {
      return true;
    }}
    this.router.navigate(['login']);
    console.log("you don't have access rights");
    return false ;
  }
  
}
  

