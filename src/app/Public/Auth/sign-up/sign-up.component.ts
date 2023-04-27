import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceuserService } from '../../../Shared/Services/serviceuser.service';
import { User } from '../../../Shared/Models/user';
import Dropzone from 'dropzone';
import { ResselerserviceService } from 'src/app/Shared/Services/resselerservice.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { UserService } from 'src/app/Shared/Services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[AuthService]
})
export class SignUpComponent implements OnInit {
 
  user: any;
  tok: any
  users: User[]=[];
userr: User =new User();
errorMsg='';
submitted = false;

  constructor(
    private userService: UserService,
    private authS:AuthService,
    private fb: FormBuilder,
    private userservice: ServiceuserService,
    private router: Router,
    private route: ActivatedRoute,
    private resellerService : ResselerserviceService,
    private toastr: ToastrService
  ) {}

  utilisateur={
    userId:'',
    cin:'',
    username:'',
    email:'',
    adress:'',
    password:'',
    verif_password:'',
    gender:'FEMEL',
    role:'[ROLE_USER]',
  
  }
  
  ngOnInit(): void { 
    //this.authS.addUser(userA).subscribe(this.user)=> {
   // this.user= this.user;}

      
  }
  register(){
    this.authS.addUser(this.utilisateur).subscribe(
      (res)=>{
       // this.tok= res;
       // localStorage.setItem('token',this.tok.token);
        this.router.navigate(['/home']);
        
     
      alert('Votre compte a été crier avec succes !')
      },
      (err)=>{
        this.errorMsg = err.statusText
  
        console.log('Email ou mot de passe invalide');
      })
  
  }
saveUser2(){
  this.authS.createUser(this.userr).subscribe(data=>{
     console.log(data);
     this.goToUserList();
},
error => console.log(error));
}
goToUserList(){
  this.router.navigate(['/subscribe'])
}

reloadPage(){
//window.location.reload();
this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
this.router.onSameUrlNavigation='reload';
this.router.navigate(['./'], {
  relativeTo:this.route
})
  }
}
