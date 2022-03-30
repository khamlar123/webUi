import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepamentInfoComponent } from './depament-info.component';

const routes: Routes = [
  {
    path: '',
    component: DepamentInfoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepamentRoutingModule { }
