import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitelinksComponent } from './sitelinks.component';

const routes: Routes = [
  {
    path: '',
    component: SitelinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitelinksRoutingModule { }
