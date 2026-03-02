import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  email: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);
  currentUser = signal<User | null>(null);
  constructor() {
    const savedUser = localStorage.getItem('wearhere_user');
    if (savedUser) {
      this.currentUser.set(JSON.parse(savedUser));
    }
  }

  login(email: string) {
    const role = email.includes('admin') ? 'admin' : 'user';
    const user: User = { email, role };
    this.currentUser.set(user);
    localStorage.setItem('wearhere_user', JSON.stringify(user));
    this.router.navigate(['/']);
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('wearhere_user');
    this.router.navigate(['/login']);
  }
}
