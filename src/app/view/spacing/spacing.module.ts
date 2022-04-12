import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacingRoutingModule } from './spacing-routing.module';
import { SpacingComponent } from './spacing.component';
import { OrgDataModule } from 'src/app/share-component/org-data/org-data.module';
import { Org2Module } from 'src/app/share-component/org2/org2.module';


@NgModule({
  declarations: [SpacingComponent],
  imports: [
    CommonModule,
    SpacingRoutingModule,
    /*   OrgDataModule, */
    Org2Module
  ]
})
export class SpacingModule { }
