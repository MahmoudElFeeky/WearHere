import { Component } from '@angular/core';
import { Slider } from './components/slider/slider';
import { ProductCard } from './components/product-card/product-card';
import { PRODUCT_LIST } from './models/product';

@Component({
  selector: 'app-root',
  imports: [Slider, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'App';
  // products data
  products = PRODUCT_LIST;
}
