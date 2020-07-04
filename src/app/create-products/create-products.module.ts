import { NgModule } from '@angular/core';
import { CreateProductsRoutingModule } from './create-products-routing/create-products-routing.module';
import { CreateProductsComponent } from './create-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [
    CreateProductsRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    CommonModule
  ],
  declarations: [ CreateProductsComponent ],
  providers: []
})
export class CreateProductsModule { }
