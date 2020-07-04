//dialog-box.component.ts
import { Component, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductsData } from "app/view-products/view-products.component";

@Component({
  selector: "app-dialog-box",
  templateUrl: "./dialog-box.component.html",
  styleUrls: ["./dialog-box.component.css"],
})
export class DialogBoxComponent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ProductsData
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    if (
      this.local_data.productId !== null &&
      this.local_data.productName !== null &&
      this.local_data.price !== null &&
      this.local_data.quantity !== null
    )
      this.dialogRef.close({ event: this.action, data: this.local_data });
    else alert(`Error! \n Please enter valid details.`);
  }
  closeDialog() {
    this.dialogRef.close({ event: "Cancel" });
  }
}
