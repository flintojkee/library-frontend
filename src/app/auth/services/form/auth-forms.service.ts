import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginForm, OptionalType, fieldsValidators, SignUpForm } from '@library/app/models/forms';
import { FormService } from '@library/app/core/services/form';
import {
  requiredValidator,
  emailValidator,
  minLengthValidator,
  passwordValidator,
  requiredTrueValidator
} from '@library/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthFormsService {
  constructor(private formService: FormService, private formBuilder: FormBuilder) {}
  createLoginForm(email: string, password: string): FormGroup {
    const initialValues: OptionalType<LoginForm> = new LoginForm(email, password);
    const validators: fieldsValidators<LoginForm> = {
      email: [requiredValidator('Email'), emailValidator()],
      password: [requiredValidator('Password')]
    };

    const controls = this.formService.createFormControls(initialValues, validators);

    return this.formBuilder.group(controls);
  }
  createSignUpForm(): FormGroup {
    const initialValues: OptionalType<SignUpForm> = new SignUpForm();
    const validators: fieldsValidators<SignUpForm> = {
      fullName: [requiredValidator('Full name')],
      email: [requiredValidator('Email Address'), emailValidator()],
      password: [
        requiredValidator('Password'),
        minLengthValidator('Minimum length of password is', 4),
      ],
      address: [requiredValidator('Address')],
      dateOfBirth: [requiredValidator('Date of Birth')]
    };

    const controls = this.formService.createFormControls(initialValues, validators);

    return this.formBuilder.group(controls);
  }

  trimStringFields<T>(obj: T): T {
    return Object.keys(obj).reduce(
      (trimmedObj: T, key: string) => {
        const isString = typeof obj[key] === 'string';
        trimmedObj[key] = isString ? obj[key].trim() : obj[key];
        return trimmedObj;
      },
      {} as T
    );
  }
}
