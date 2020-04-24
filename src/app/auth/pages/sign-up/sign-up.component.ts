import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormsService, AuthService } from '../../services';
import { SignUpForm } from '@library/app/models/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Role } from '@library/app/models';

@Component({
  selector: 'lbr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  constructor(private authForms: AuthFormsService, private authService: AuthService) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {}

  signUp(credentials: SignUpForm) {
    const date = credentials.dateOfBirth.split('T')[0];
    const role = [Role.admin];
    const user = {
      ...credentials,
      dateOfBirth: date,
      role
    };
    console.log(user);
    this.authService
      .sigUp(user)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
      });
  }

  createForm() {
    this.signUpForm = this.authForms.createSignUpForm();
  }
}
