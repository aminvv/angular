import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
 productsName:string="";
  productsId:number=0;

  constructor(private router:ActivatedRoute ,private route:Router ,private location:Location) { }

  ngOnInit(): void {

     if(this.router.snapshot.params['id']){
      this.productsId=this.router.snapshot.params['id']

     }
     this.router.queryParams.subscribe(params=>{
        this.productsId=params['id'];
        this.productsName=params["title"];
      
     })
   


    

  }

  
  back():void{
    // this.route.navigate(['/products']);
    this.location.back();
  }

}
