import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "app/services/data-service.service";
@Component({
  selector: "app-create-products",
  templateUrl: "./create-products.component.html",
  styleUrls: ["./create-products.component.css"],
})
export class CreateProductsComponent implements OnInit {
  creationForm: FormGroup;
  submitted = false;
  success = false;
  failure = false;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.creationForm = this.formBuilder.group({
      productId: ["", Validators.required],
      productName: ["", Validators.required],
      price: ["", Validators.required],
      quantity: ["", Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.creationForm.invalid) {
      this.failure = true;
      return;
    }
    this.success = true;
    // display form values on success
    let productArray = this.dataService.getData;
    if (
      productArray === null ||
      productArray === undefined ||
      typeof productArray !== "object"
    ) {
      productArray = new Array();
    }
    this.creationForm.value.timestamp = new Date().getTime();
    productArray.push(this.creationForm.value);
    this.dataService.setData(productArray);
  }
  onReset() {
    this.submitted = false;
    this.creationForm.reset();
  }
}
