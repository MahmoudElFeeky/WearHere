import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { CardHoverDirective } from '../../directives/card-hover.directive';

@Component({
  selector: 'app-product-card',
  imports: [ShortenPipe, CardHoverDirective],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;

  showFullDesc: boolean = false;
  isBought: boolean = false;

  toggleDesc() {
    this.showFullDesc = !this.showFullDesc;
  }
  toggleBuy() {
    this.isBought = !this.isBought;
  }
}
