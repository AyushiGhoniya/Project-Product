import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from "./add-product/add-product.component";
import { StockStatusComponent } from "./stock-status/stock-status.component";
import { SortProductComponent } from "./sort-product/sort-product.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductMasterComponent } from './product-master.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { GradeDirective } from '../directives/grade.directive';
import { InputDirective } from '../directives/input.directive';
import { FilterPipe } from '../pipe/filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: ProductMasterComponent,
    children: [
      {path: 'list' ,component: ProductDetailsComponent},
      {path: 'addProduct' ,component: AddProductComponent},
      {path: 'addProduct/:id' ,component: AddProductComponent},
      {path: 'cart' ,component: AddToCartComponent,data:{fromComp: 'cart'}},
      {path: 'favourite' ,component: AddToCartComponent,data:{fromComp: 'favourite'}}
   ]
  }
];

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductMasterComponent,
    AddProductComponent,
    StockStatusComponent,
    SortProductComponent,
    AddToCartComponent,
    GradeDirective,
    InputDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProductMasterModule { }
