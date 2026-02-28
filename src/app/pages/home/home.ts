import { Component } from '@angular/core';
import { Slider } from '../../components/slider/slider';
import { ProductsSection } from '../../components/products-section/products-section';

@Component({
  selector: 'app-home',
  imports: [Slider, ProductsSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
