import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
  providers :[UserService]

})
export class SubscriptionsComponent implements OnInit {

  user: any;
  constructor(private userService: UserService,private router: Router){

  }
  ngOnInit(): void {
    console.log('on init ...')
    this.userService.getUsers().subscribe((datas)=> {
      this.user= datas;
    })
  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
}