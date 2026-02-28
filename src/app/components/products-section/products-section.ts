import { Component } from '@angular/core';
import { Header } from '../header/header';
import { FilterAside } from '../filter-aside/filter-aside';
import { Products } from '../products/products';
import { PRODUCT_LIST, Product } from '../../models/product';

@Component({
  selector: 'app-products-section',
  imports: [Header, FilterAside, Products],
  templateUrl: './products-section.html',
  styleUrl: './products-section.css'
})
export class ProductsSection {
  // Data
  products = PRODUCT_LIST;
  // Filters
  searchTerm: string = '';
  selectedCategory: string = 'All';
  sortOrder: string = 'default';
  // Computed properties
  get categories(): string[] {
    const allCategories = this.products.map(p => p.category);
    return ['All', ...new Set(allCategories)];
  }
  // Filtered and sorted products
  get filteredProducts(): Product[] {
    let result = [...this.products];
    if (this.searchTerm) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    if (this.selectedCategory !== 'All') {
      result = result.filter(p => p.category === this.selectedCategory);
    }
    if (this.sortOrder === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'high') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => a.id - b.id);
    }
    return result;
  }
}
