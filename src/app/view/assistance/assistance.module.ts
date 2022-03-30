import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceRoutingModule } from './assistance-routing.module';
import { ModalComponent } from './modal/modal.component';
import { AssistanceComponent } from './assistance.component';


@NgModule({
  declarations: [
    ModalComponent,
    AssistanceComponent,
  ],
  imports: [
    CommonModule,
    AssistanceRoutingModule
  ]
})
export class AssistanceModule { }
