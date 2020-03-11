import { Injectable } from '@angular/core';
import { FormService } from '@library/app/core/services/form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateBookForm, OptionalType, fieldsValidators } from '@library/app/models/forms';
import { requiredValidator, emailValidator } from '@library/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class FormBookService {

  constructor(private formService: FormService, private formBuilder: FormBuilder) {}

  getCreateBookForm(): FormGroup {
    const initialValues: OptionalType<CreateBookForm> = new CreateBookForm();
    const validators: fieldsValidators<CreateBookForm> = {
      name: [requiredValidator('Name')],
      publishingHouse: [requiredValidator('Publishing house')],
      publishingYear: [requiredValidator('Publishing year')],
      city: [requiredValidator('City')],
      numberOfPages: [requiredValidator('Number of pages')],
      price: [requiredValidator('Price')],
      authors: [],
      numberOfInstances: [requiredValidator('Name')],
      category: [requiredValidator('Category')],
      description: [requiredValidator('Description')]
    };

    const controls = this.formService.createFormControls(initialValues, validators);

    return this.formBuilder.group(controls);
  }
}
