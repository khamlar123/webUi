import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OulineComponent } from './ouline.component';

const routes: Routes = [
  {
    path: '',
    component: OulineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutlineRoutingModule { }
