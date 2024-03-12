import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from './Customer.Model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  customerList : Customer[] =
  [ 
     new Customer(1,'vishal','namdeo',5),
     new Customer(2,'Endou','Momuru',5),
     new Customer(3,'Monkey D','Luffy',10)   
  ];

  editCustomer = new Subject<Customer>();

  constructor() { }

  customerByid(id:number)
  {
     return this.customerList.find(element=>element.id==id);
  }

  upateCustomer(id:number,customer:Customer)
  {     
      for(let value of this.customerList)
      {
         if(value.id == id)
         {
          value.FirstName = customer.FirstName;
          value.LastName = customer.LastName;
          value.Employee = customer.Employee;           
          break
         }
      }
  }

  getCustomer()
  {
    return this.customerList;
  }
}
