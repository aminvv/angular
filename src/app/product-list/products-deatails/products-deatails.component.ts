import { Component, Input, OnInit, Output } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-deatails',
  templateUrl: './products-deatails.component.html',
  styleUrls: ['./products-deatails.component.css']
})

export class ProductsDeatailsComponent implements OnInit {
  @Input()item:any;
 @Input()rating:number=2.5;
 width:number=0;
 @Output() starClick = new EventEmitter <number>();
 @Output() remove =new EventEmitter();

  constructor(private rout:Router) { }

  ngOnInit(): void {
    this.width=this.rating *72 / 4;
    console.log("this Width = " + this.width);
    
  }
  gotoProducts(item:any){
    this.rout.navigate(['/products/info'],{queryParams:{id:item.id,title:item.title}}) 
  }
  onclick(){
    this.starClick.emit(this.rating)
  }
  itemRemove(id:any){
    this.remove.emit(id)
  }


}