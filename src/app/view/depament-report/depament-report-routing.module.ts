import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepamentReportComponent } from './depament-report.component';

const routes: Routes = [
  {
    path: '',
    component: DepamentReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepamentReportRoutingModule { }
