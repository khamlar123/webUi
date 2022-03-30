import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayOutRoutingModule } from './lay-out-routing.module';
import { LayOutComponent } from './lay-out.component';



@NgModule({
  declarations: [
    LayOutComponent,
  ],
  imports: [
    CommonModule,
    LayOutRoutingModule
  ]
})
export class LayOutModule { }
