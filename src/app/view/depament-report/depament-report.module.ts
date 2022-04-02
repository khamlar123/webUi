import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepamentReportRoutingModule } from './depament-report-routing.module';
import { DepamentReportComponent } from './depament-report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepamentReportComponent
  ],
  imports: [
    CommonModule,
    DepamentReportRoutingModule,
    FormsModule,
  ]
})
export class DepamentReportModule { }
