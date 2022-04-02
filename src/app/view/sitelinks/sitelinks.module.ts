import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitelinksRoutingModule } from './sitelinks-routing.module';
import { SitelinksComponent } from './sitelinks.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SitelinksComponent],
  imports: [
    CommonModule,
    SitelinksRoutingModule,
    FormsModule
  ]
})
export class SitelinksModule { }
