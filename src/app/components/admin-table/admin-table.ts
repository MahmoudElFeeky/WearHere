import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-table',
  imports: [],
  templateUrl: './admin-table.html',
  styleUrl: './admin-table.css'
})
export class AdminTable {
  @Input() products: Product[] = [];
  @Output() onEdit = new EventEmitter<Product>();
  @Output() onDelete = new EventEmitter<number>();
}
