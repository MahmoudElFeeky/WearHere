import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  // inject services
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
  // Variables to hold data
  product: Product | null = null;
  selectedImage: string = '';
  // fetch details
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
        if (this.product && this.product.images.length > 0) {
          this.selectedImage = this.product.images[0];
        }
      });
    }
  }
  // Change image
  changeImage(img: string) {
    this.selectedImage = img;
  }
  // Adds the item to the cart
  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert(`"${this.product.title}" added successfully to your cart!`);
    }
  }
}
