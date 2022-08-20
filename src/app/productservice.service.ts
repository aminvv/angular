import { Injectable } from '@angular/core';
import { product } from "./product-list/productss";

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  products:product[]=[
    new product(101,"Toyota"),
    new product(102,"Benz"),
    new product(103,"Ferrari"),
    new product(104,"Dodge"),
    new product(104,"Volvo")

]

getAll():product[]{
   return this.products
}

get(id:number){
    return this.products.find(q=> q.id ==id)
}

add(model:product):void{
    this.products.push(model)
}

edit(model:product){
   const index=this.products.findIndex(q=> q.id==model.id)
   this.products[index]=model;
}

remove(id:number){
    this.products=this.products.filter(q=> q.id!=id)
}
}
