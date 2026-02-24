import { Component } from '@angular/core';
import { Slide } from '../../models/slide';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
  slides: Slide[] = [
    new Slide('assets/images/a1.webp', 'a1'),
    new Slide('assets/images/a2.webp', 'a2'),
    new Slide('assets/images/a3.webp', 'a3'),
    new Slide('assets/images/a4.webp', 'a4')
  ];

  currentIndex: number = 0;

  // Events
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
