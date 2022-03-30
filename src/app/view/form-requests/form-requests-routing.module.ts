import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRequestsComponent } from './form-requests.component';

const routes: Routes = [
  {
    path: '',
    component: FormRequestsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRequestsRoutingModule { }
