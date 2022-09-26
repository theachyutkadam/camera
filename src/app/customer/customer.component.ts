import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  // template: "Enter Your Name Is: <input value={{name}} />"
  //   template: `
  // User Name: <input type="text" [(ngModel)]="userName" ><br/>
  //   {{userName}}`
  // template: `
  //   Enter Your Name: <input type="text" [(ngModel)]="userName" /> <br/>
  //   {{userName}}`
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor() { }

  name: string = "Achyut";

  customer(event:any): void {
    alert("Hello " + event.target.innerHTML);
  };

  private _userName: string = "bill gates";

  get userName(): string {
    return this._userName;
  }
  set userName(val: string) {
    //do some extra work here
    this._userName = val;
  }

  ngOnInit(): void {
  }
}
