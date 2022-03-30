import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebInfoComponent } from './web-info.component';

  const routes: Routes = [
    {
      path: '',
      component: WebInfoComponent
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebInfoRoutingModule { }
