import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacingRoutingModule } from './spacing-routing.module';
import { SpacingComponent } from './spacing.component';
import { OrgDataModule } from 'src/app/share-component/org-data/org-data.module';


@NgModule({
  declarations: [SpacingComponent],
  imports: [
    CommonModule,
    SpacingRoutingModule,
    OrgDataModule
  ]
})
export class SpacingModule { }
