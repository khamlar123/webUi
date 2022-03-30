import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaproductsComponent } from './teaproducts.component';

const routes: Routes = [
  {
    path: '',
    component: TeaproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaproductsRoutingModule { }
