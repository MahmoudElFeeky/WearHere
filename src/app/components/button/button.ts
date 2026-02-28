import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() title: string = 'Click Me';
  @Input() bgColor: string = '#1a1a1a';
  // pass the click event to the parent
  @Output() onClick = new EventEmitter<void>();
}
