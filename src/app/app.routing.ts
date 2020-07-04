import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Admin'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },
    },
    {
      path: 'create-products',
      loadChildren: () => import('./create-products/create-products.module').then(m => m.CreateProductsModule),
      data: {
        title: 'Create'
      },
    },
    {
      path: 'view-products',
      loadChildren: () => import('./view-products/view-products.module').then(m => m.ViewProductsModule),
      data: {
        title: 'View'
      },
    }
  ]
}, {
  path: 'tables',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Tables'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
