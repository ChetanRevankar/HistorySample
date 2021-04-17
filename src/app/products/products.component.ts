import { Component, OnInit } from '@angular/core';

import {Product} from '../product';
import { ProductService } from '../product.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedProduct?: Product;

  products: Product[] = [];

  constructor(private productService: ProductService, private historyService: HistoryService) { }

  ngOnInit() {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.historyService.add(product);
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }
}