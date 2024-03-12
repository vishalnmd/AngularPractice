import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../Customer.Model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent {
  
  demo : string="this is emited to by component 1";
  @Output() outEvent = new EventEmitter<string>();

  customer : Customer[];

    constructor(private customerService:CustomerService,private route:Router)
    {
       this.customer = this.customerService.customerList;       
    }

    onCreate()
    {
       this.outEvent.emit(this.demo);
       this.route.navigate(['/editCustomer',-1]);
    }

    onEdit(customer:Customer)
    {
        this.customerService.editCustomer.next(customer);
        this.route.navigate(['/editCustomer',customer.id])
    }
}
