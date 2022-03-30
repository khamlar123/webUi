import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from 'src/app/share-component/product/product.component';
import { ShareProductComponent } from './share-product/share-product.component';


@NgModule({
  declarations: [ProductListComponent,ProductComponent, ShareProductComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
