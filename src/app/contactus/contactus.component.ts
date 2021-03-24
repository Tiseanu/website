import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactErr = false;
  onSubmit (value: string) {
    console.log(value);
   /* if (value.message === "" || value.urname === "" || value.email === "") {
      this.contactErr = true;
    } else {
      this.contactErr = false;
    }*/

  }

  constructor() { }

  ngOnInit(): void {
  }

}
