import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root',
})
export class HistoryService {

  history: Product[] = [];

  add(product: Product) {
    this.history.push(product);
  }

  clear() {
    this.history = [];
  }

}