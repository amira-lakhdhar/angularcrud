import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Shared/Services/customer.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-reseller-client-details',
  templateUrl: './reseller-client-details.component.html',
  styleUrls: ['./reseller-client-details.component.css'],
})
export class ResellerClientDetailsComponent implements OnInit {
  customer: any;
  createdDate: any;
  createdTime: any;
  itemToUpdate: any;
  myForm: FormGroup;
  status : any;
  listCustomer: any = [];
  dropdownList  : any [] =  [];
  dropdownSettings : IDropdownSettings = {};
  cust!: { item_id: any; item_text: any; };
  list : any [] = []
  selectedItems!: any[];
  selectedCity: any ;

 constructor(
  public translateService: TranslateService,
    private serviceCustomer: CustomerService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
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
    this.getCustomer();
    this.serviceCustomer.getallCustomers().subscribe((result) => {
      this.listCustomer = result;
      for(let i=0 ; i< this.listCustomer.length ; i++)
      {
        this.cust = {item_id : this.listCustomer[i]._id , item_text : this.listCustomer[i].Contacts.companyName} ;
        this.list.push(this.cust)
      }

    });
  }

  getCustomer() {
    this.route.params.subscribe((params) => {
      console.log(params['_id']);
      this.serviceCustomer.getcustomerById(params['_id']).subscribe((res) => {
        console.log(res);
        this.createdDate = res.Informations.created.substring(0, 10);
        this.createdTime = res.Informations.created.substring(11, 16);
        this.customer = res;
        this.selectedCity = res.Contacts.companyName ;
        if (this.customer.Informations.status == "active") {
          this.status = 'Archiver'
        }
        else
        {
          this.status = 'Afficher'
        }
      });
    });
  }

  updateItem(item: any) {
    this.itemToUpdate = item._id;
    this.serviceCustomer.getcustomerById(item._id).subscribe((res) => {
      this.customer = res;
      console.log(res);
      this.myForm.get('companyName')!.setValue(res.Contacts.companyName);
      this.myForm.get('companyEmail')!.setValue(res.Contacts.email);
      this.myForm.get('companyPhone')!.setValue(res.Contacts.phone);
      this.myForm.get('addressLine1')!.setValue(res.Address.addressLine1);
      this.myForm.get('addressLine2')!.setValue(res.Address.addressLine2);
      this.myForm.get('city')!.setValue(res.Address.city);
      this.myForm.get('state')!.setValue(res.Address.state);
      this.myForm.get('zip')!.setValue(res.Address.zip);
    });
  }
  updateCustomer() {
    console.log(this.myForm.value);
    let data = this.myForm.value;
    let user = {
      informations: {
        lastUpdateBy: localStorage.getItem('fullName'),
        createdBy : this.customer.Informations.createdBy,
        lastArchivedBy :this.customer.Informations.lastArchivedBy ,
        lastArchivedDate : this.customer.Informations.lastArchivedDate,
        status : this.customer.Informations.status
      },
      contact: {
        companyName: data.companyName,
        email: data.companyEmail,
        phone: data.companyPhone,
      },
      adress: {
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
      },
    };

    console.log(user);

    this.serviceCustomer.updateCustomer(this.itemToUpdate, user).subscribe(
      (result) => {
        this.getCustomer();
        console.log(result);
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  changeStatus(customer: any) {
    console.log(customer.Informations.status);
    
    let lastArchivedBy = {
      lastArchivedBy: localStorage.getItem('fullName'),
    };
    if (customer.Informations.status == 'active') {
      this.serviceCustomer
        .archiveCustomer(lastArchivedBy, customer._id)
        .subscribe((res) => {
          console.log(res);
          this.getCustomer();
        });
    }
    else {
      this.serviceCustomer
      .afficheCustomer(lastArchivedBy, customer._id)
      .subscribe((res) => {
        console.log(res);
        this.getCustomer();
      });
    }
  }
  
  onItemSelect(item: any) {
    console.log(item);
  }

}
