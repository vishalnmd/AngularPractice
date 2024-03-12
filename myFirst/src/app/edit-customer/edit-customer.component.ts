import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer.Model';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})

export class EditCustomerComponent implements OnInit {

  customer:Customer = new Customer(1,'','',0);
  id :number = -1;
  constructor(private customerSerivce:CustomerService,private route:Router,private activeRoute:ActivatedRoute){}

  ngOnInit(){  

    // this.customerSerivce.editCustomer.subscribe(customer=>{
    //   this.customer.FirstName = customer.FirstName;
    //   this.customer.LastName = customer.LastName;
    //   this.customer.Employee = this.customer.Employee;
    //   console.log(customer);
    // });
    if(this.activeRoute.snapshot.params['id']!=null){
        this.id = this.activeRoute.snapshot.params['id'];
        if(this.id>=0)
        {
           const customer = <Customer> this.customerSerivce.customerByid(this.id);           
          this.customer.FirstName = customer.FirstName;
          this.customer.LastName = customer.LastName;
          this.customer.Employee = customer.Employee;
           console.log(customer);          
        }        
    }  
  }
    
  onSave()
  {
    if(this.customer.FirstName=='' || this.customer.LastName=='')
    {
       window.Error("Firstname or LastName can not be emptied");       
    }

    else if(this.customer.Employee<0)
    {
       window.Error("Employee number cannot be less then 0");
    }
    
    else
    { 
      if(this.id<0)
      {
        const id = this.customerSerivce.customerList.length+1;      
        this.customerSerivce.customerList.push(new Customer(id,this.customer.FirstName,this.customer.LastName,this.customer.Employee));
        this.route.navigate(['/searchCustomer']);
      }
      
      else
      {
          this.customerSerivce.upateCustomer(this.id,this.customer);
          this.route.navigate(['/searchCustomer']);
      }
      
    }    
  }
}
