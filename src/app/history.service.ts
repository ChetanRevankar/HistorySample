import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root',
})
export class HistoryService {

  history: Product[] = [];

  add(product: Product) {
    console.log('Product added to history'+ JSON.stringify(product));
  }

  clear() {
    this.history = [];
  }

}