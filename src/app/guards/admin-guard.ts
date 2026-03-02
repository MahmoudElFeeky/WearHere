import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  // Check if the user is an admin
  if (authService.currentUser()?.role === 'admin') {
    return true;
  }
  // If not an admin, show an alert and redirect to home
  alert('Access Denied. Admins only!');
  router.navigate(['/']);
  return false;
};
