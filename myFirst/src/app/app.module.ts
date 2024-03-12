import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerService } from './customer.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchCustomerComponent,
    EditCustomerComponent     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
