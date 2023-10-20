import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Import the user data arrays
import { adminUsers, regularUsers } from './usersdata'; // Replace with the correct path

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Retrieve the expected role from the route data
    const expectedRole = route.data['expectedRole'];

    // Get the user's username from the route (you need to implement this in your login logic)
    const currentUser = route.queryParams['username'];

    // Check if the user's username matches the expected role for admin
    const isAdmin = adminUsers.some((admin) => admin.username === currentUser);

    // Check if the user's username matches the expected role for regular user
    const isRegularUser = regularUsers.some((user) => user.username === currentUser);

    if (expectedRole === 'admin' && isAdmin) {
      return true; // Allow access to the route
    } else if (expectedRole === 'user' && isRegularUser) {
      return true; // Allow access to the route
    } else {
      // Redirect to a different route (e.g., login) if the user's role doesn't match
      this.router.navigate(['/login']);
      return false; // Prevent access to the route
    }
  }
}
