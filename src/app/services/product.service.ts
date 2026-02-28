import { Injectable } from '@angular/core';
import { Product, PRODUCT_LIST } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [...PRODUCT_LIST];

  // read
  getProducts(): Product[] {
    return this.products;
  }
  // create
  addProduct(product: Product) {
    // fake id for the new product
    product.id = Math.max(...this.products.map(p => p.id)) + 1;
    this.products.push(product);
  }
  // update
  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
  // delete
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
