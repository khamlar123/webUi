import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListComponent } from './news-list.component';
import { NewsWrapperModule } from 'src/app/share-component/news-wrapper/news-wrapper.module';
import { CategoryListModule } from '../category-list/category-list.module';


@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    CommonModule,
    NewsListRoutingModule,
    NewsWrapperModule,
    // CategoryListModule
  ]
})
export class NewsListModule { }
