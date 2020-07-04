import { NgModule } from "@angular/core";
import { ViewProductsRoutingModule } from "./view-products-routing/view-products-routing.module";
import { ViewProductsComponent } from "./view-products.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  imports: [ViewProductsRoutingModule, MatTableModule, MatButtonModule],
  declarations: [ViewProductsComponent],
  providers: [],
})
export class ViewProductsModule {}
