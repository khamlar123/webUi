import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgDataComponent } from './org-data.component';
import { OrgChartModule } from 'angular-org-chart';


@NgModule({
  declarations: [
    OrgDataComponent
  ],
  imports: [
    CommonModule,
    OrgChartModule
  ],
  exports: [OrgDataComponent]
})
export class OrgDataModule { }
