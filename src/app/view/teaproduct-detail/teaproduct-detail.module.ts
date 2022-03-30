import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaproductDetailRoutingModule } from './teaproduct-detail-routing.module';
import { TeaproductDetailComponent } from './teaproduct-detail.component';


@NgModule({
  declarations: [
    TeaproductDetailComponent
  ],
  imports: [
    CommonModule,
    TeaproductDetailRoutingModule
  ]
})
export class TeaproductDetailModule { }
