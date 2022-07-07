import { Component, ElementRef, OnInit, ViewChild, Renderer2, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-coustomer-address',
  templateUrl: './coustomer-address.component.html',
  styleUrls: ['./coustomer-address.component.css']
})
export class CoustomerAddressComponent implements OnInit {

  textarea:string="england:"
  @ViewChild('textBox')add:ElementRef
  constructor(private randerer: Renderer2) { }

  ngOnInit(): void {
    this.randerer.createText=this.add.nativeElement.value

  }





}
