import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { AdminTable } from '../../components/admin-table/admin-table';
import { AdminForm } from '../../components/admin-form/admin-form';

@Component({
  selector: 'app-admin',
  imports: [AdminTable, AdminForm, FormsModule, MatIconModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminPage {
  productService = inject(ProductService);
  productToEdit: Product | null = null;
  searchId: number | null = null;
  // get
  get allProducts() {
    let products = this.productService.getProducts();
    if (this.searchId) { // by id
      const idToSearch = Number(this.searchId);
      products = products.filter(p => p.id === idToSearch);
    }
    return products;
  }
  // handlers
  handleDelete(id: number) {
    if (confirm('Delete this product permanently?')) {
      this.productService.deleteProduct(id);
    }
  }
  handleEdit(product: Product) {
    this.productToEdit = product;
  }
  handleSave(product: Product) {
    if (product.id === 0) {
      this.productService.addProduct(product);
    } else {
      this.productService.updateProduct(product);
    }
    this.productToEdit = null;
  }
  handleCancel() {
    this.productToEdit = null;
  }
}
