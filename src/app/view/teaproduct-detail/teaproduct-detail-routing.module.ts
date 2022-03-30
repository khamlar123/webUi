import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaproductDetailComponent } from './teaproduct-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TeaproductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaproductDetailRoutingModule { }
