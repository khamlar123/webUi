import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../view/home-page/home-page.module').then(
        m => m.HomePageModule
      ),
  },
  {
    path: 'depament-info',
    loadChildren: () =>
      import('../view/depament-info/depament.module').then(
        m => m.DepamentModule
      ),
  },

  {
    path: 'spacing',
    loadChildren: () =>
      import('../view/spacing/spacing.module').then(
        m => m.SpacingModule
      ),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('../view/news-detail/news-detail.module').then(
        m => m.NewsDetailModule
      ),
  },

  {
    path: 'web-info',
    loadChildren: () => import('../view/web-info/web-info.module').then(
      m => m.WebInfoModule
    )
  },
  {
    path: 'process',
    loadChildren: () => import('../view/process/process.module').then(
      m => m.ProcessModule
    )
  },
  {
    path: 'map',
    loadChildren: () => import('../view/map/map.module').then(
      m => m.MapModule
    )
  },
  {
    path: 'documents/:id',
    loadChildren: () => import('../view/documents/documents.module').then(
      m => m.DocumentsModule
    )
  },
  {
    path: 'ouline/:id',
    loadChildren: () => import('../view/outline/outline.module').then(
      m => m.OutlineModule
    )
  },
  {
    path: 'product-list/:id',
    loadChildren: () => import('../view/product-list/product-list.module').then(
      m => m.ProductListModule
    )
  },
  {
    path: 'product-detail/:id/:web',
    loadChildren: () =>
      import('../view/product-detail/product-detail.module').then(
        m => m.ProductDetailModule
      ),
  },

  {
    path: 'assistance',
    loadChildren: () =>
      import('../view/assistance/assistance.module').then(
        m => m.AssistanceModule
      ),
  },

  {
    path: 'siteLinks',
    loadChildren: () =>
      import('../view/sitelinks/sitelinks.module').then(
        m => m.SitelinksModule
      ),
  },

  {
    path: 'statistics/:id',
    loadChildren: () =>
      import('../view/statistics/statistics.module').then(
        m => m.StatisticsModule
      ),
  },

  {
    path: 'teaproducts',
    loadChildren: () =>
      import('../view/teaproducts/teaproducts-routing.module').then(
        m => m.TeaproductsRoutingModule
      ),
  },

  {
    path: 'teaproducts-detail/:id',
    loadChildren: () =>
      import('../view/teaproduct-detail/teaproduct-detail.module').then(
        m => m.TeaproductDetailModule
      ),
  },

  {
    path: 'category-list',
    loadChildren: () =>
      import('../view/category-list/category-list-routing.module').then(
        m => m.CategoryListRoutingModule
      ),
  },

  {
    path: 'category-detail/:id',
    loadChildren: () =>
      import('../view/category-detail/category-detail-routing.module').then(
        m => m.CategoryDetailRoutingModule
      ),
  },

  {
    path: 'contact',
    loadChildren: () =>
      import('../view/contact/contact-routing.module').then(
        m => m.ContactRoutingModule
      ),
  },

  {
    path: 'news-list/:id',
    loadChildren: () =>
      import('../view/news-list/news-list.module').then(
        m => m.NewsListModule
      ),
  },

  {
    path: 'development-plan',
    loadChildren: () =>
      import('../view/development-plan/development-plan.module').then(
        m => m.DevelopmentPlanModule
      ),
  },

  {
    path: 'form-requests',
    loadChildren: () =>
      import('../view/form-requests/form-requests.module').then(
        m => m.FormRequestsModule
      ),
  },

  {
    path: 'depament-report',
    loadChildren: () =>
      import('../view/depament-report/depament-report.module').then(
        m => m.DepamentReportModule
      ),
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
