import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartPage {
  // inject the CartService
  // to access cart data and operations
  cartService = inject(CartService);
  get items() {
    return this.cartService.items;
  }
  get total() {
    return this.cartService.getTotalPrice();
  }
  // checkout
  checkout() {
    alert('Redirecting to payment page...');
  }
  // remove a single item from the cart
  removeItem(id: string | number) {
    this.cartService.removeFromCart(id);
  }
  // update the quantity of a specific item in the cart
  updateQuantity(id: string | number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }
  // empty the entire cart
  clearCart() {
    const confirmClear = confirm('Are you sure you want to empty your cart?');
    if (confirmClear) {
      this.cartService.clearCart();
    }
  }
}
