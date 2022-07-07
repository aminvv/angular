import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductInfoComponent } from './product-list/product-info/product-info.component';
import { FeautersComponent } from './category-list/feauters/feauters.component';
import { ColorsComponent } from './category-list/colors/colors.component';
import { ProductsDeatailsComponent } from './product-list/products-deatails/products-deatails.component';
import { CoustomerInfoComponent } from './coustomer-info/coustomer-info.component';
import { CoustomerAddressComponent } from './coustomer-info/coustomer-address/coustomer-address.component';
import { CarsComponent } from './category-list/cars/cars.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductInfoComponent,
    FeautersComponent,
    ColorsComponent,
    ProductsDeatailsComponent,
    CoustomerInfoComponent,
    CoustomerAddressComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
