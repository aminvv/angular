import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coustomer-address',
  templateUrl: './coustomer-address.component.html',
  styleUrls: ['./coustomer-address.component.css']
})
export class CoustomerAddressComponent implements OnInit {
  homeAddress:string="urmia";
  nativeElement: any;
  constructor() { }

  ngOnInit(): void {
  }

}
