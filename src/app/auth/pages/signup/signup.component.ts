import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthFormsService } from '../../services';
import { SignUpForm } from '@library/app/models/forms';

@Component({
  selector: 'phb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isFormConfirmed: boolean;
  constructor(private authForms: AuthFormsService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.authForms.createSignUpForm();
  }

  onSubmit(formData: SignUpForm) {}
}
