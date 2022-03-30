import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepamentRoutingModule } from './depament-routing.module';
import { DepamentInfoComponent } from './depament-info.component';



@NgModule({
  declarations: [DepamentInfoComponent],
  imports: [
    CommonModule,
    DepamentRoutingModule
  ]
})
export class DepamentModule { }
