import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  // json-server
  private apiUrl = 'http://localhost:3000/products';
  // Get by ID
  getProductById(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  // read
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  // create
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
  // update
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }
  // delete
  deleteProduct(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
