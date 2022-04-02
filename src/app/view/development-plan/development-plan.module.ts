import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentPlanRoutingModule } from './development-plan-routing.module';
import { DevelopmentPlanComponent } from './development-plan.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DevelopmentPlanComponent
  ],
  imports: [
    CommonModule,
    DevelopmentPlanRoutingModule,
    FormsModule
  ]
})
export class DevelopmentPlanModule { }
