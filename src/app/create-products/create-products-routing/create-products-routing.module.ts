import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CreateProductsComponent } from '../create-products.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateProductsComponent,
    data: {
      title: 'Create Products'
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
export class CreateProductsRoutingModule { }
