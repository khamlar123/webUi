import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutlineRoutingModule } from './outline-routing.module';
import { OulineComponent } from './ouline.component';
import { OrgDataModule } from 'src/app/share-component/org-data/org-data.module';
import { FormsModule } from '@angular/forms';
import { Org3Module } from 'src/app/share-component/org3/org2.module';
@NgModule({
  declarations: [
    OulineComponent,
  ],
  imports: [
    CommonModule,
    OutlineRoutingModule,
    OrgDataModule,
    FormsModule,
    Org3Module
  ]
})
export class OutlineModule { }
