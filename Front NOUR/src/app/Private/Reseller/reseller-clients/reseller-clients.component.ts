import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/Shared/Services/customer.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-reseller-clients',
  templateUrl: './reseller-clients.component.html',
  styleUrls: ['./reseller-clients.component.css'],
})
export class ResellerClientsComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  listCustomer: any = [];
  selectedDevice: string = '';
  itemToUpdate: any;
  customer: any;
  myForm: FormGroup;
  archive: boolean = false;
  constructor(
    public translateService: TranslateService,
    private serviceCustomer: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
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
    this.getAll();

    


  }
  getAll() {
    this.serviceCustomer.getallCustomers().subscribe((result) => {
      this.listCustomer = result;
      console.log(this.listCustomer);
    });
  }
  getClassStatus(mark: any) {
    if (mark == 'active') return 'badge badge rounded-pill badge-soft-success';
    else return 'badge badge rounded-pill badge-soft-secondary ';
  }
  getClassIcons(mark: any) {
    if (mark == 'active') return 'ms-1 fas fa-check';
    else return 'ms-1 fas fa-ban';
  }
  delete(id: any) {
    localStorage.setItem('idCustomer', id);
  }
  updateItem(item: any) {
    this.itemToUpdate = item._id;
    this.serviceCustomer.getcustomerById(item._id).subscribe((res) => {
      this.customer = res;
      console.log(res);

      this.myForm.get('companyName')!.setValue(res.Contacts.CompanyName);
      this.myForm.get('companyEmail')!.setValue(res.Contacts.email);
      this.myForm.get('companyPhone')!.setValue(res.Contacts.phone);
      this.myForm.get('addressLine1')!.setValue(res.Address.addressLine1);
      this.myForm.get('addressLine2')!.setValue(res.Address.addressLine2);
      this.myForm.get('city')!.setValue(res.Address.city);
      this.myForm.get('state')!.setValue(res.Address.state);
      this.myForm.get('zip')!.setValue(res.Address.zip);
    });
  }

  onChange(event: string) {
    console.log(event);
    if (event == 'archived') this.archive = true;
    else this.archive = false;
    if (event !== '') {
      this.selectedDevice = event;
      this.serviceCustomer
        .getAllCustomersWithStatus(event)
        .subscribe((result) => {
          this.listCustomer = result;
          console.log(result);
        });
    } else {
      this.serviceCustomer.getallCustomers().subscribe((result) => {
        this.listCustomer = result;
        console.log(result);
      });
    }
  }

  confirmDelete() {
    this.serviceCustomer
      .deleteCustomer(localStorage.getItem('idCustomer'))
      .subscribe((res) => {
        document.getElementById('closs')!.click();
        this.getAll();
      });
  }

  saveCustomer() {
    console.log(this.myForm.value);
    let data = this.myForm.value;
    console.log(data);

    let user = {
      informations: {
        fullName: data.fullName,
        createdBy: localStorage.getItem('fullName'),
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
    this.serviceCustomer.addCustomer(user).subscribe(
      (res) => {
        this.closebutton.nativeElement.click();
        this.getAll();
        this.router.navigate(['/reseller/clients']);
        console.log(res);
      },
      (err) => {
        this.toastr.error(err.error.Error)
        console.log(err);
      }
    );
  }

}
