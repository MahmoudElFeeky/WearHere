import { Injectable } from '@angular/core';
import { Product } from '../models/product';

// Cart
export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  // Make service available every where
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  // Add
  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product: product, quantity: 1 });
    }
  }
  // Remove
  removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }
  // Get total price
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
  // Clear
  clearCart() {
    this.items = [];
  }
}
