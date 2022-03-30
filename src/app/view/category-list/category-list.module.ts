import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListRoutingModule } from './category-list-routing.module';
import { CategoryListComponent } from './category-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    AppRoutingModule
  ]
})
export class CategoryListModule { }
