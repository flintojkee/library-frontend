import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFormComponent, SignUpForm, formProperties, Role } from '@library/app/models/forms';
import { FormGroup, AbstractControl } from '@angular/forms';
import { validateForm } from '@library/app/shared/decorators';

@Component({
  selector: 'lbr-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent
  implements OnInit, IFormComponent<SignUpForm>, formProperties<SignUpForm> {
  @Input() formGroup: FormGroup;
  @Output() submittedForm = new EventEmitter();

  email: AbstractControl;
  password: AbstractControl;
  fullName: AbstractControl;
  address: AbstractControl;
  dateOfBirth: AbstractControl;
  constructor() {}

  ngOnInit() {
    this.initFormControls(this.formGroup);
  }

  initFormControls(formGroup: FormGroup) {
    this.email = formGroup.controls.email;
    this.password = formGroup.controls.password;
    this.fullName = formGroup.controls.fullName;
    this.address = formGroup.controls.address;
    this.dateOfBirth = formGroup.controls.dateOfBirth;
  }

  @validateForm('formGroup')
  onSubmit(formData: SignUpForm): void {
    this.submittedForm.emit(formData);
  }
}
