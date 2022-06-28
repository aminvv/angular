import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoustomerAddressComponent } from './coustomer-address/coustomer-address.component';

@Component({
  selector: 'app-coustomer-info',
  templateUrl: './coustomer-info.component.html',
  styleUrls: ['./coustomer-info.component.css']
})
export class CoustomerInfoComponent implements OnInit {
  [x: string]: any;
  @ViewChild('homeaddress')home:CoustomerInfoComponent;
  @ViewChild('firstname') first:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    alert(this.first.nativeElement.value )
    console.log("log"+this.first.nativeElement.value );
   
      console.log("log"+this.home.nativeElement.value);
      alert(this.home.nativeElement.value)
      

    

  }
}
