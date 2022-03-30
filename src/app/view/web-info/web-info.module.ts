import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebInfoComponent } from './web-info.component';
import { WebInfoRoutingModule } from './web-info-routing.module';



@NgModule({
  declarations: [
    WebInfoComponent
  ],
  imports: [
    CommonModule,
    WebInfoRoutingModule

  ]
})
export class WebInfoModule { }
