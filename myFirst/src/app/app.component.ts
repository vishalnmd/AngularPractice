import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  data: string ='';

  ngOnInit()
  {

  }
  
  onGetData(data:string)
  {
    this.data = data;
    console.log(this.data);
  }

}
