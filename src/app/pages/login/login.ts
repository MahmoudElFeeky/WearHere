import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginPage {
  authService = inject(AuthService);

  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email) {
      this.authService.login(this.email);
    }
  }
}
