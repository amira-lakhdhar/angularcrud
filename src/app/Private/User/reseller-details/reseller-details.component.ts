import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResselerserviceService } from 'src/app/Shared/Services/resselerservice.service';

@Component({
  selector: 'app-reseller-details',
  templateUrl: './reseller-details.component.html',
  styleUrls: ['./reseller-details.component.css'],
})
export class ResellerDetailsComponent implements OnInit {
  reseller: any;
  logosrc!: string;

  constructor(
    private route: ActivatedRoute,
    private resellerService: ResselerserviceService
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      console.log(params['_id']);
      this.resellerService.getResellerById(params['_id']).subscribe((res) => {
        console.log(res);
        this.logosrc = "http://localhost:3000/api/uploads/" + res.Contacts.Logo ;
        this.reseller = res;
      });
    });
  }
  getClassStatus(mark : any){
    if(mark == 'Active')
    return 'badge badge rounded-pill badge-soft-success';
    else if (mark == 'Blocked')
    return 'badge badge rounded-pill badge-soft-secondary ';
    else return 'badge badge rounded-pill badge-soft-warning';
  }
  getClassIcons(mark : any){
    if(mark == 'Active')
    return 'ms-1 fas fa-check';
    else if (mark == 'OnHold')
    return 'ms-1 fas fa-stream';
    else return 'ms-1 fas fa-ban';
  }
}
