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
  // Updates the quantity of a specific item in the cart
  updateQuantity(productId: string | number, quantity: number) {
    const item = this.items.find(i => String(i.product.id) === String(productId));
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
      } else {
        this.removeFromCart(productId);
      }
    }
  }
  // Remove
  removeFromCart(productId: string | number) {
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
