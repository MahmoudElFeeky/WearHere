import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { AdminTable } from '../../components/admin-table/admin-table';
import { AdminForm } from '../../components/admin-form/admin-form';

@Component({
  selector: 'app-admin',
  imports: [AdminTable, AdminForm, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminPage implements OnInit {
  productService = inject(ProductService);
  products: Product[] = [];
  productToEdit: Product | null = null;
  searchId: string = '';

  // load the products when the component initializes
  ngOnInit() {
    this.loadProducts();
  }
  // load products from the service
  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  // filter products by ID
  get filteredProducts() {
    if (this.searchId) {
      return this.products.filter(p => String(p.id) === String(this.searchId));
    }
    return this.products;
  }
  // delete a product by id
  handleDelete(id: string | number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        // Refresh the list after deleting
        this.loadProducts();
      });
    }
  }
  // Puts the selected product into the form
  handleEdit(product: Product) {
    this.productToEdit = { ...product };
  }
  // create or update
  handleSave(product: Product) {
    if (this.productToEdit) {
      // updating an existing product
      this.productService.updateProduct(product).subscribe(() => {
        this.loadProducts();
        this.productToEdit = null;
      });
    } else {
      // adding a new product
      this.productService.addProduct(product).subscribe(() => {
        this.loadProducts();
        this.productToEdit = null;
      });
    }
  }
  // Clears the form
  handleCancel() {
    this.productToEdit = null;
  }
}
