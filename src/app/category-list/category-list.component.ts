import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { category } from '../module/category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList:category[];
  categoryListWithService:category[];
  constructor(private http:HttpClient ,private categoryservice:CategoryService) { }

  ngOnInit(): void {
    const apiurl = "https://apitester.ir/api/Categories"
    this.http.get<category[]>(apiurl).subscribe(resulte=>this.categoryList=resulte);
    this.categoryservice.getAll().subscribe(resulte=>this.categoryListWithService=resulte)
  }


}
