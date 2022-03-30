import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRequestsRoutingModule } from './form-requests-routing.module';
import { FormRequestsComponent } from './form-requests.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormRequestsComponent
  ],
  imports: [
    CommonModule,
    FormRequestsRoutingModule,
    FormsModule
  ]
})
export class FormRequestsModule { }
