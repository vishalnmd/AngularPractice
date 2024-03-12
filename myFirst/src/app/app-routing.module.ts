import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchCustomerComponent } from "./search-customer/search-customer.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";


const appRoutes:Routes = [
    {path:'', component:SearchCustomerComponent},
    {path:'searchCustomer', component:SearchCustomerComponent},
    {path:'editCustomer', component:EditCustomerComponent},
    {path:'editCustomer/:id', component:EditCustomerComponent}
]

@NgModule({
    imports :[RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})
export class AppRoutingModule 
{
    
}