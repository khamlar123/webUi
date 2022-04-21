import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ProductInfoComponent } from 'src/app/share-component/product-info/product-info.component';
import { HotProductComponent } from './component/hot-product/hot-product.component';
import { VdioComponent } from './component/vdio/vdio.component';
import { SitelinkInfoComponent } from 'src/app/share-component/sitelink-info/sitelink-info.component';




@NgModule({
  declarations: [HomePageComponent, ProductInfoComponent, HotProductComponent, VdioComponent, SitelinkInfoComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
