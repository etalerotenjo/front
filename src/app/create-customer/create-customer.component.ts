import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './../customer-service.service';
import { Customer } from './../models/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.sass']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerServiceService: CustomerServiceService) { }

  ngOnInit(): void {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerServiceService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
