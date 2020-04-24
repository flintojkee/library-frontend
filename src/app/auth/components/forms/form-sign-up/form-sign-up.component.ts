import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFormComponent, SignUpForm, formProperties } from '@library/app/models/forms';
import { FormGroup, AbstractControl } from '@angular/forms';
import { validateForm } from '@library/app/shared/decorators';
import { BaseFormComponent } from '@library/app/shared/utils';

@Component({
  selector: 'lbr-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent extends BaseFormComponent<SignUpForm>
  implements OnInit, IFormComponent<SignUpForm>, formProperties<SignUpForm> {
  email: AbstractControl;
  password: AbstractControl;
  fullName: AbstractControl;
  address: AbstractControl;
  dateOfBirth: AbstractControl;
  constructor() {
    super();
  }

  ngOnInit() {
    this.initFormControls(Object.getOwnPropertyNames(new SignUpForm()));
  }
}
