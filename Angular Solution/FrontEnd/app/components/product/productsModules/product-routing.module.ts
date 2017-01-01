import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent }    from '../productComponents/productList.component';
import { ProductDetailsComponent }  from '../productComponents/product-details.component';

const ProductesRoutes: Routes = [
  { path: 'productes',  component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProductesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }