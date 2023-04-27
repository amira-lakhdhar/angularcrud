import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceuserService } from '../../../Shared/Services/serviceuser.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  lang: any;
  selectedLanguage: any;
  fullName!: string ;
  logo! : string ;
  logosrc! : string ;
  constructor(private translateService: TranslateService, private userService : ServiceuserService) {
    this.lang = {
      flag: 'us',
      id: 'en',
      title: 'English',
    };
  }
  languages: any[] = [
    {
      id: 'fr-FR',
      title: 'Français',
      flag: 'fr',
      name: 'FR',
    },

    {
      id: 'en-US',
      title: 'English',
      flag: 'us',
      name: 'EN',
    },
  ];
  ngOnInit(): void {
    this.selectedLanguage = this.lang;
    this.fullName = localStorage.getItem("fullName")!;
    if (this.fullName == null) this.fullName = localStorage.getItem('firstName')! +' '+ localStorage.getItem('lastName') ;
    this.logo = localStorage.getItem('logo')!;
    if (this.logo == null) this.logo = "avatar.png"
    this.logosrc = "http://localhost:3000/api/uploads/" + this.logo ;
  }
  public setLanguage(lang: any): void {
    console.log(lang);
    this.selectedLanguage = lang;
    this.translateService.use(lang.id);
  }

  logout(){
      this.userService.logout();
  }

}
