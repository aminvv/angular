import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
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
import { HomeServiceComponent } from './test-service/home-service/home-service.component';
import { UsersComponent } from './test-service/users/users.component';
import { UserComponent } from './test-service/users/user/user.component';
import { EployeeInfoComponent } from './eployee-info/eployee-info.component';
import{ReactiveFormsModule}from '@angular/forms';

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
    HomeServiceComponent,
    UsersComponent,
    UserComponent,
    EployeeInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
