import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsWrapperComponent } from './news-wrapper.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewsWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NewsWrapperComponent
  ]
})
export class NewsWrapperModule { }
