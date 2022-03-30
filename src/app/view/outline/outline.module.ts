import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutlineRoutingModule } from './outline-routing.module';
import { OulineComponent } from './ouline.component';
import { OrgDataModule } from 'src/app/share-component/org-data/org-data.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    OulineComponent,
  ],
  imports: [
    CommonModule,
    OutlineRoutingModule,
    OrgDataModule,
    FormsModule
  ]
})
export class OutlineModule { }
