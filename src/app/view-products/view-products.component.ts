import { Component, ViewChild } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";
import { DialogBoxComponent } from "../dialog-box/dialog-box.component";
import { DataService } from "app/services/data-service.service";

export interface ProductsData {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  timestamp: number;
}
@Component({
  selector: "app-view-products",
  templateUrl: "./view-products.component.html",
  styleUrls: ["./view-products.component.css"],
})
export class ViewProductsComponent {
  displayedColumns: string[] = [
    "productId",
    "productName",
    "price",
    "quantity",
    "action",
  ];
  dataSource: ProductsData[];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog, private dataService: DataService) {
    this.dataSource = this.dataService.getData;
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: "250px",
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      /*if (result.event == "Add") {
        this.addRowData(result.data);
      } else */
      if (result.event == "Update") {
        this.updateRowData(result.data);
      } else if (result.event == "Delete") {
        this.deleteRowData(result.data);
      }
    });
  }
  /*
  addRowData(row_obj: ProductsData) {
    this.dataSource.push({
      productId: row_obj.productId,
      productName: row_obj.productName,
      price: row_obj.price,
      quantity: row_obj.quantity,
      timestamp: new Date().getTime()
    });
    this.table.renderRows();
  }
  */
  updateRowData(row_obj: ProductsData) {
    let tempArr: Array<ProductsData> = this.dataSource;
    this.dataSource.forEach((item, index) => {
      if (item.productId == row_obj.productId) {
        tempArr[index] = row_obj;
        this.dataService.setData(tempArr);
        return;
      }
    });
    this.table.renderRows();
  }
  deleteRowData(row_obj: ProductsData) {
    this.dataSource.forEach((item, index) => {
      if (item.productId === row_obj.productId)
        this.dataSource.splice(index, 1);
    });
    this.dataService.setData(this.dataSource);
    this.table.renderRows();
  }
}
