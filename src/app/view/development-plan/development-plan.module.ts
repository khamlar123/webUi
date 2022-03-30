import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentPlanRoutingModule } from './development-plan-routing.module';
import { DevelopmentPlanComponent } from './development-plan.component';


@NgModule({
  declarations: [
    DevelopmentPlanComponent
  ],
  imports: [
    CommonModule,
    DevelopmentPlanRoutingModule
  ]
})
export class DevelopmentPlanModule { }
