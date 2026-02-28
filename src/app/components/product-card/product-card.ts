import { Component, Input, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { CartService } from '../../services/cart.service';
import { Button } from '../button/button';

@Component({
  selector: 'app-product-card',
  imports: [ShortenPipe, Button],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
  cartService = inject(CartService);
  showFullDesc: boolean = false;
  // toggle the desc between full and shortened
  toggleDesc() {
    this.showFullDesc = !this.showFullDesc;
  }
  // add the product to the cart and show an alert message
  addToCart() {
    this.cartService.addToCart(this.product);
    alert(`"${this.product.title}" added successfully to your cart!`);
  }
}
