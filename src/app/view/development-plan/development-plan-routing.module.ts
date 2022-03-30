import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentPlanComponent } from './development-plan.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopmentPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentPlanRoutingModule { }
