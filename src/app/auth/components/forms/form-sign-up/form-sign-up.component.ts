// import { Component, OnInit, Input, Output } from '@angular/core';
// import { IFormComponent, SignUpForm, formProperties } from '@library/app/models/forms';
// import { FormGroup, AbstractControl } from '@angular/forms';
// import { EventEmitter } from 'events';
// import { validateForm } from '@library/app/shared/decorators';

// @Component({
//   selector: 'phb-form-sign-up',
//   templateUrl: './form-sign-up.component.html',
//   styleUrls: ['./form-sign-up.component.scss']
// })
// export class FormSignUpComponent
//   implements OnInit, IFormComponent<SignUpForm>, formProperties<SignUpForm> {
//   @Input() formGroup: FormGroup;
//   @Output() submittedForm = new EventEmitter();

//   email: AbstractControl;
//   password: AbstractControl;
//   fullName: AbstractControl;
//   retypedPassword: AbstractControl;
//   terms: AbstractControl;

//   constructor() {}

//   ngOnInit() {
//     this.initFormControls(this.formGroup);
//   }

//   initFormControls(formGroup: FormGroup) {
//     this.email = formGroup.controls.email;
//     this.password = formGroup.controls.password;
//     this.fullName = formGroup.controls.fullName;
//     this.retypedPassword = formGroup.controls.retypedPassword;
//     this.terms = formGroup.controls.terms;
//   }

//   @validateForm('formGroup')
//   onSubmit(formData: SignUpForm): void {
//     this.submittedForm.emit(formData);
//   }
// }
