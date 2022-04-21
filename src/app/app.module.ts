import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './share-component/footer/footer.component';
import { NavMenuComponent } from './share-component/nav-menu/nav-menu.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { BannerSliderComponent } from './share-component/banner-slider/BannerSliderComponent';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DonorFlagComponent } from './share-component/donor-flag/donor-flag.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './view/category-list/category-list.component';
import { CategoryDetailComponent } from './view/category-detail/category-detail.component';
import { MapComponent } from './view/map/map.component';
import { TeaproductsComponent } from './view/teaproducts/teaproducts.component';
import { ContactComponent } from './view/contact/contact.component';
import { OrgDataModule } from './share-component/org-data/org-data.module';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavMenuComponent,
    FooterComponent,
    BannerSliderComponent,
    DonorFlagComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    // StatisticsComponent,
    MapComponent,
    TeaproductsComponent,
    // SitelinksComponent,
    ContactComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrgDataModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
