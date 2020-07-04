import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
const COLLECTION_NAME: string = "productsCollection";
@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(public httpClient: HttpClient) {}
  get getData() {
    return JSON.parse(localStorage.getItem(COLLECTION_NAME));
  }
  setData(data: any) {
    localStorage.setItem("productsCollection", JSON.stringify(data));
  }
}
