import { Component, OnInit } from "@angular/core";
import { DataService } from "app/services/data-service.service";
import { ProductsData } from "app/view-products/view-products.component";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {}
  totalProducts: number = 0;
  totalCapital: number = 0;
  totalInventoryCount: number = 0;
  totalProductsToday: number = 0;
  totalCapitalToday: number = 0;
  totalInventoryCountToday: number = 0;
  totalProductsPast: number = 0;
  totalCapitalPast: number = 0;
  totalInventoryCountPast: number = 0;
  ngOnInit() {
    this.computeProductsMetadata(this.dataService.getData);
  }
  computeProductsMetadata(data: ProductsData[]) {
    let todayData: any = new Array<ProductsData>();
    let pastData: any = new Array<ProductsData>();
    this.totalProducts = data.length;
    data.forEach((val) => {
      this.totalInventoryCount += val.quantity;
      this.totalCapital += val.price;
      if (new Date(val.timestamp).toDateString() == new Date().toDateString())
        todayData.push(val);
      else if (new Date(val.timestamp) < new Date()) {
        pastData.push(val);
      }
    });
    todayData.forEach((val) => {
      this.totalInventoryCountToday += val.quantity;
      this.totalCapitalToday += val.price;
    });
    pastData.forEach((val) => {
      this.totalInventoryCountPast += val.quantity;
      this.totalCapitalPast += val.price;
    });
    this.totalProductsToday = todayData.length;
    this.totalProductsPast = pastData.length;
  }
}
