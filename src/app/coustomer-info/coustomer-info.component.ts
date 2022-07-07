import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { elementAt } from 'rxjs';
import { CoustomerAddressComponent } from './coustomer-address/coustomer-address.component';

@Component({
  selector: 'app-coustomer-info',
  templateUrl: './coustomer-info.component.html',
  styleUrls: ['./coustomer-info.component.css'],

})

export class CoustomerInfoComponent implements OnInit, AfterViewInit {
  @ViewChild('name') name: ElementRef
  @ViewChild(CoustomerAddressComponent, { read: CoustomerAddressComponent }) address: CoustomerAddressComponent
  @ViewChildren(CoustomerAddressComponent) coutomerAddress: QueryList<CoustomerAddressComponent>
  text: string;
  textStyle: boolean=false
  constructor(private Randerer: Renderer2) { }


  ngOnInit(): void {
    console.log("log" + this.text);


  }
  ngAfterViewInit(): void {


  }

  transfer(event) {
    this.text = this.address.add.nativeElement.value;

    this.coutomerAddress.forEach(element => {
      element.add

    })

  }




  onkeyup(event) {
    this.text = this.Randerer.createText = this.name.nativeElement.value;
  }



}