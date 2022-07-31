import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
// import { read } from 'fs';
import { elementAt } from 'rxjs';
import { CoustomerAddressComponent } from './coustomer-address/coustomer-address.component';

@Component({
  selector: 'app-coustomer-info',
  templateUrl: './coustomer-info.component.html',
  styleUrls: ['./coustomer-info.component.css'],

})

export class CoustomerInfoComponent implements OnInit, AfterViewInit {
  @ViewChild('name') name: ElementRef
  @ViewChild('textBox', { read: CoustomerAddressComponent, static: true }) address: ElementRef
  @ViewChildren(CoustomerAddressComponent) addressList: QueryList<CoustomerAddressComponent>
  text: string;
  textStyles: boolean = false;
  ismodify:Boolean=true;
  iscnclled:Boolean=false;
  constructor(private Randerer: Renderer2) { }
  style = {};
  classes={};

  ngOnInit(): void {
    console.log("log" + this.text);
    this.style = {
      'font-size':this.textStyles?'2rem':'15rem',
      'color':"green"
    }
    this.classes={
      'big-font-size':this.ismodify,
      'color-text':this.iscnclled

    }

  }
  ngAfterViewInit(): void {




  }


  transfer(event) {

    alert(this.address.nativeElement.value);
    console.log("item");

    this.addressList.forEach(item => console.log(item));


  }




  onkeyup(event) {
    this.text = this.Randerer.createText = this.name.nativeElement.value;
  }



}