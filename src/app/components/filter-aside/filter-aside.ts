import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-filter-aside',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './filter-aside.html',
  styleUrl: './filter-aside.css'
})
export class FilterAside {
  // Get category list from Home
  @Input() categories: string[] = [];
  // Filters (2 way binding)
  // 1) Search
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  // 2) Category
  @Input() category: string = 'All';
  @Output() categoryChange = new EventEmitter<string>();
  // 3) Sort by price
  @Input() sortOrder: string = 'default';
  @Output() sortOrderChange = new EventEmitter<string>();
}
