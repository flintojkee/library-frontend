import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { AuthFormsService, AuthService } from '@library/app/auth/services';
import { LoginForm } from '@library/app/models/forms';

@Component({
  selector: 'lbr-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  constructor(private authForms: AuthFormsService, private authService: AuthService) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {}

  login(credentials: LoginForm) {
    this.authService.login(credentials).subscribe((res) => {
    });
  }

  createForm() {
    this.loginForm = this.authForms.createLoginForm(null, null);
  }
}
