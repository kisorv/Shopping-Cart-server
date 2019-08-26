import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get("http://localhost:5000/cart-items");
  }

  postRequest() {
    return this.http.get("http://localhost:5000/cart-items");
  }

  putRequest() {
    return this.http.get("http://localhost:5000/cart-items/:id");
  }

  deleteRequest() {
    return this.http.get("http://localhost:5000/cart-items/:id");
  }
}
