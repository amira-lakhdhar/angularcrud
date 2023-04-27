import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ServiceuserService } from '../../../Shared/Services/serviceuser.service';
import { User } from '../../../Shared/Models/user';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm : FormGroup
  constructor(private fb:FormBuilder , private userservice : ServiceuserService , private router : Router,private toastr: ToastrService,private jwtHelper :JwtHelperService) {
    let formconrols = {  
  
       email :new FormControl(), 
       password:new FormControl() 

    } ;
    this.myForm= this.fb.group(formconrols)

   }

  ngOnInit(): void {
  }
  loginUser()
  { 
  
    let data = this.myForm.value ; 
    let user = {
      Email : data.email,
      Password :data.password
    };  
    console.log(user);
    this.userservice.loginuser(user).subscribe(
     res=>{ console.log(res['token']) ;
      const decodeToken = this.jwtHelper.decodeToken(res['token']);
      console.log(decodeToken);
      localStorage.setItem('token' ,res['token']);
      localStorage.setItem('role' , decodeToken['role']);
      if (decodeToken['role'] == "Admin"){
        this.router.navigate(['/home']) ;
        localStorage.setItem('firstName' , res['data'].Firstname);
        localStorage.setItem('lastName' , res['data'].Lastname);
      }
        else {
      localStorage.setItem('logo' , res['data'].Contacts.Logo);
      localStorage.setItem('fullName' , res['data'].Informations.FullName);
        this.router.navigate(['/dashboardReseller']) ;
      }
      this.toastr.success("Welcome");

    }, 
    err=>{
      this.toastr.error(err.error.Error)
      console.log(err);
      

    }
    ) 
    
  }
}
