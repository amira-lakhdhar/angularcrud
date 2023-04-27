import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public role: any;
  constructor(public translateService: TranslateService)  { }
  
  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

}
