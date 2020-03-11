import { OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { IFormComponent } from 'src/app/models/forms';
import { FormGroup } from '@angular/forms';
import { validateForm } from '../decorators';
import { keys } from 'ts-transformer-keys';
export abstract class BaseFormComponent<T> implements IFormComponent<T> {
  @Input() formGroup: FormGroup;
  @Output() submittedForm = new EventEmitter<T>();
  initFormControls(props: string[]) {
    props.map((el) => {
      this[el] = this.formGroup.get(el);
    });
  }
  @validateForm('formGroup')
  onSubmit(formData: T): void {
    this.submittedForm.emit(formData);
  }
}
