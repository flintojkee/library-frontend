import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { IFormComponent, LoginForm, formProperties } from '@library/app/models/forms';
import { validateForm } from '@library/app/shared/decorators';
import { BaseFormComponent } from '@library/app/shared/utils';

@Component({
  selector: 'lbr-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent extends BaseFormComponent<LoginForm>
  implements OnInit, IFormComponent<LoginForm>, formProperties<LoginForm>, OnDestroy {
  email: AbstractControl;
  password: AbstractControl;
  constructor() {
    super();
  }

  ngOnInit() {
    this.initFormControls(Object.getOwnPropertyNames(new LoginForm('', '')));
  }

  ngOnDestroy() {}

}
