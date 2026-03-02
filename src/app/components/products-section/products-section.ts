import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { FilterAside } from '../filter-aside/filter-aside';
import { Products } from '../products/products';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-section',
  imports: [Header, FilterAside, Products],
  templateUrl: './products-section.html',
  styleUrl: './products-section.css'
})
export class ProductsSection implements OnInit {
  // Injecting the database service
  productService = inject(ProductService);
  // start empty and fill it with the live data from the database
  products: Product[] = [];
  // fetching the data on component creation
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  // Filters
  searchTerm: string = '';
  selectedCategory: string = 'All';
  sortOrder: string = 'default';
  // getting the unique categories
  get categories(): string[] {
    const allCategories = this.products.map(p => p.category.name);
    return ['All', ...new Set(allCategories)];
  }
  // applying filters and sorting to the products list
  get filteredProducts(): Product[] {
    let result = [...this.products];
    if (this.searchTerm) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    if (this.selectedCategory !== 'All') {
      result = result.filter(p => p.category.name === this.selectedCategory);
    }
    if (this.sortOrder === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'high') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => Number(a.id) - Number(b.id));
    }
    return result;
  }
}
