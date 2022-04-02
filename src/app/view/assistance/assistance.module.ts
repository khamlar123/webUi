import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceRoutingModule } from './assistance-routing.module';
import { ModalComponent } from './modal/modal.component';
import { AssistanceComponent } from './assistance.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalComponent,
    AssistanceComponent,
  ],
  imports: [
    CommonModule,
    AssistanceRoutingModule,
    FormsModule
  ]
})
export class AssistanceModule { }
