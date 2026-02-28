import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-cart',
  imports: [Button],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartPage {
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
  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }
  // empty the entire cart
  clearCart() {
    const confirmClear = confirm('Are you sure you want to empty your cart?');
    if (confirmClear) {
      this.cartService.clearCart();
    }
  }
}
