import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-form',
  imports: [FormsModule],
  templateUrl: './admin-form.html',
  styleUrl: './admin-form.css'
})
export class AdminForm implements OnChanges {
  @Input() selectedProduct: Product | null = null;
  @Output() onSave = new EventEmitter<Product>();
  @Output() onCancel = new EventEmitter<void>();

  // get cur data
  formData: Product = this.getEmptyProduct();
  // edit, update the form data
  ngOnChanges() {
    if (this.selectedProduct) {
      this.formData = { ...this.selectedProduct };
    } else {
      this.formData = this.getEmptyProduct();
    }
  }
  // submit form data
  submitForm() {
    this.onSave.emit(this.formData);
    this.formData = this.getEmptyProduct();
  }
  // clear form data
  getEmptyProduct(): Product {
    return {id: '', title: '', price: '' as any, description: '', category: { id: 1, name: '', image: '' }, images: ['']};
  }
  // prevent strings
  allowNumbersOnly(event: KeyboardEvent): void {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }
}
