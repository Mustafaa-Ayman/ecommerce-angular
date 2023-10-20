import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { adminUsers, regularUsers } from '../guard/usersdata'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // To display an error message if authentication fails

  constructor(private router: Router) {}

  login() {
    const enteredUsername = this.username;
    const enteredPassword = this.password;
    

    // Check if the entered username and password are valid (you need to implement this logic)

    // Determine if the user is an admin
    const isAdmin = adminUsers.find(
      (admin) => admin.username === enteredUsername && admin.password === enteredPassword
    );
    const isRegularUser = regularUsers.find(
      (user) => user.username === enteredUsername && user.password === enteredPassword
    );

    if (isAdmin) {
      // User is an admin, navigate to the admin dashboard
      this.router.navigate(['/admin-dashboard'], { queryParams: { username: enteredUsername } });
    } else if (isRegularUser) {
      // User is not an admin, navigate to the user dashboard
      this.router.navigate(['/user-dashboard'], { queryParams: { username: enteredUsername } });
    } else {
      // Display an error message for invalid credentials
      this.errorMessage = 'Invalid username or password';
      alert(this.errorMessage);
    }
  }
}
