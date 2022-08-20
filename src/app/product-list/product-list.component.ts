
import { OnInit, Component } from "@angular/core"
import {  Router, } from "@angular/router"
import { ProductserviceService } from "../productservice.service";
import { product } from "./productss";




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private route: Router, private productservice: ProductserviceService) { }
  ratings: number[] = [2, 2.5, 4, 3.5];

  // products=[{id:2020,title:'toyota'},{id:2019,title:'benz'},{id:2022,title:'ferrari'}]
  products: product[]
  ngOnInit() {
    this.products=this.productservice.getAll()
  }

  gotoProducts(item: any) {
    this.route.navigate(['/products/info'], { queryParams: { id: item.id, title: item.title } })
  }
  onclickStar(ratings: number) {
    alert("your good" + (ratings))
    this.ratings = this.ratings.filter(q => q != ratings)
    console.log();


  }
  delete(id: any) {
    this.products = this.products.filter(q => q.id != id)
    alert("You did it")
  }

}