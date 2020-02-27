import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { IFormComponent, LoginForm, formProperties } from '@library/app/models/forms';
import { validateForm } from '@library/app/shared/decorators';

@Component({
  selector: 'lbr-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent
  implements OnInit, IFormComponent<LoginForm>, formProperties<LoginForm>, OnDestroy {
  @Input() formGroup: FormGroup;
  @Output() submittedForm = new EventEmitter();
  email: AbstractControl;
  password: AbstractControl;
  constructor() {}

  ngOnInit() {
    this.initFormControls(this.formGroup);
  }

  ngOnDestroy() {}

  initFormControls(formGroup: FormGroup) {
    this.email = formGroup.controls['email'];
    this.password = formGroup.controls['password'];
  }

  @validateForm('formGroup')
  onSubmit(formData: LoginForm): void {
    this.submittedForm.emit(formData);
  }
}
