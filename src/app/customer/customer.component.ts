import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  // template: "Enter Your Name Is: <input value={{name}} />"
  // template: `<div>
  //   Enter Your Name: <input type="text" value={{name}} /> <br/>
  //   <button (click)="customer()">Greet Me!</button>
  //   </div>`
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "Achyut";

  customer(event:any): void {
    alert("Hello " + event.target.innerHTML);
  };

}
