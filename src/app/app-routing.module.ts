import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ColorsComponent } from './category-list/colors/colors.component';
import { FeautersComponent } from './category-list/feauters/feauters.component';
import { CoustomerAddressComponent } from './coustomer-info/coustomer-address/coustomer-address.component';
import { CoustomerInfoComponent } from './coustomer-info/coustomer-info.component';
import { EployeeInfoComponent } from './eployee-info/eployee-info.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductInfoComponent } from './product-list/product-info/product-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeServiceComponent } from './test-service/home-service/home-service.component'
import { UserComponent } from './test-service/users/user/user.component';
import { UsersComponent } from './test-service/users/users.component'

const routes: Routes = [



  { path: "products", component: ProductListComponent },
  {
    path: "", component: HomeComponent,
    children: [
      { path: 'HomeService', component: HomeServiceComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user', component: UserComponent },
    ]
  },
  { path: "products/:id", component: ProductInfoComponent },
  { path: "products/info", component: ProductInfoComponent },



  {
    path: "category", component: CategoryListComponent,
    children: [
      { path: 'features', component: FeautersComponent },
      { path: 'colors', component: ColorsComponent },
      { path: '', redirectTo: 'features', pathMatch: 'full' }
    ]
  },
  { path: "coustomer/info", component: CoustomerInfoComponent },
  { path: "coustomer/address", component: CoustomerAddressComponent },
  {path:"employee",component:EployeeInfoComponent},
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
