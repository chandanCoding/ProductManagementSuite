import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ViewProductsComponent } from '../view-products.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewProductsComponent,
    data: {
      title: 'View Products'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class ViewProductsRoutingModule { }
