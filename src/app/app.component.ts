import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './Shared/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[UserService]
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';
  user: any;
  constructor(){

  }
  ngOnInit(): void {
    //console.log('on init ...')
    //this.dataService.getUsers().subscribe((datas)=> {
      //this.user= datas;
    //})
  }
}
