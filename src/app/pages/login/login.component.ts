import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.setIsLoggedIn(true);
      this.authService.setUserName(loginForm.value.email);
      this.router.navigate(['/dashboard']);
    }
  }
}
