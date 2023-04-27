import { Component, OnInit } from '@angular/core';
import { ResselerserviceService } from '../../../Shared/Services/resselerservice.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceuserService } from 'src/app/Shared/Services/serviceuser.service';
@Component({
  selector: 'app-resellers',
  templateUrl: './resellers.component.html',
  styleUrls: ['./resellers.component.css'],
})
export class ResellersComponent implements OnInit {
  listeresellers: any = [];
  status!: string;
  myForm: FormGroup;
  itemToUpdate: any;
  reseller: any;
  constructor(private servicereseller: ResselerserviceService,private fb: FormBuilder,
    private userservice: ServiceuserService,
    private router: Router,
    private resellerService : ResselerserviceService,) {
    let formconrols = {
      fullName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      companyName: new FormControl(),
      companyEmail: new FormControl(),
      companyPhone: new FormControl(),
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
      country: new FormControl(),
    };
    this.myForm = this.fb.group(formconrols);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.servicereseller.getallresselers().subscribe((result) => {
      this.listeresellers = result;
      for (let i = 0; i < result.length; i++) {
        console.log(result[i].Informations.Status);
      }
    });
  }
  delete(id: any) {
    localStorage.setItem('idReseller', id);
  }

  confirmDelete() {
    this.servicereseller
      .deleteReseller(localStorage.getItem('idReseller'))
      .subscribe((res) => {
        document.getElementById('closs')!.click();
        this.getAll();
      });
  }
  getClassStatus(mark: any) {
    if (mark == 'Active') return 'badge badge rounded-pill badge-soft-success';
    else if (mark == 'Blocked')
      return 'badge badge rounded-pill badge-soft-secondary ';
    else return 'badge badge rounded-pill badge-soft-warning';
  }
  getClassIcons(mark: any) {
    if (mark == 'Active') return 'ms-1 fas fa-check';
    else if (mark == 'OnHold') return 'ms-1 fas fa-stream';
    else return 'ms-1 fas fa-ban';
  }
  selectedDevice: string = '';

  onChange(event: string) {
    console.log(event);
    
    if (event !== '') {
      this.selectedDevice = event;
      this.servicereseller
        .getAllRessellersWithStatus(event)
        .subscribe((result) => {
          this.listeresellers = result;
          console.log(result);
        });
    } else {
      this.servicereseller.getallresselers().subscribe((result) => {
        this.listeresellers = result;
        console.log(result);
      });
    }
  }

  changeStatus(item: any) {
    let data: any = {
      email: item.Informations.Email,
    };
    if (
      item.Informations.Status == 'OnHold' ||
      item.Informations.Status == 'Blocked'
    ) {
      data.status = 'Active';
    } else {
      data.status = 'Blocked';
    }

    this.servicereseller.setStatus(data).subscribe(
      (result) => {
        console.log(result);
        this.getAll();
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  updateItem(item: any) {
    this.itemToUpdate = item._id;
    this.resellerService.getResellerById(item._id).subscribe(res =>{
      this.reseller = res 
      console.log(res);
      
      this.myForm.get('fullName')!.setValue(res.Informations.FullName);
      this.myForm.get('email')!.setValue(res.Informations.Email);
      this.myForm.get('companyName')!.setValue(res.Contacts.CompanyName);
      this.myForm.get('companyEmail')!.setValue(res.Contacts.Email);
      this.myForm.get('companyPhone')!.setValue(res.Contacts.Phone);
      this.myForm.get('addressLine1')!.setValue(res.Address.AddressLine1);
      this.myForm.get('addressLine2')!.setValue(res.Address.AddressLine2);
      this.myForm.get('city')!.setValue(res.Address.City);
      this.myForm.get('state')!.setValue(res.Address.State);
      this.myForm.get('zip')!.setValue(res.Address.Zip);
      this.myForm.get('country')!.setValue(res.Address.Country);
    })
  }
  updateReseller() {
    console.log(this.myForm.value);
    let data = this.myForm.value;
    console.log(this.reseller.Informations.Status);

    let user = {
      informations: {
        FullName: data.fullName,
        Email: data.email,
        Password: this.reseller.Informations.Password,
        Status : this.reseller.Informations.Status
      },
      contact: {
        CompanyName: data.companyName,
        Email: data.companyEmail,
        Phone: data.companyPhone,
        Logo: this.reseller.Contacts.Logo
      },
      adress: {
        AddressLine1: data.addressLine1,
        AddressLine2: data.addressLine2,
        City: data.city,
        State: data.state,
        Zip: data.zip,
        Country: data.country,
      },
    };

    console.log(user);

    this.servicereseller.updateformateur(this.itemToUpdate , user).subscribe(
      (result) => {
        document.getElementById('clos')!.click();
        console.log(result);
        this.getAll();
      },
      (errors) => {
        console.log(errors);
      }
    ); 
  }
}
