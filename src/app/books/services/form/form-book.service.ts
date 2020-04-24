import { Injectable } from '@angular/core';
import { FormService } from '@library/app/core/services/form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookForm, OptionalType, fieldsValidators } from '@library/app/models/forms';
import { requiredValidator, emailValidator } from '@library/app/shared/utils';
import { Book, Author } from '@library/app/models';

@Injectable({
  providedIn: 'root'
})
export class FormBookService {
  constructor(private formService: FormService, private formBuilder: FormBuilder) {}

  getBookForm(book?: Book): FormGroup {
    const initialValues: OptionalType<BookForm> = book
      ? new BookForm(
          book.name,
          book.isbn,
          book.publishingHouse,
          book.publishingYear,
          book.city,
          book.numberOfPages,
          book.price,
          book.authors as Author[],
          book.numberOfInstances,
          book.category,
          book.description
        )
      : new BookForm();
    const validators: fieldsValidators<BookForm> = {
      name: [requiredValidator('Name')],
      isbn: [requiredValidator('ISBN')],
      publishingHouse: [requiredValidator('Publishing house')],
      publishingYear: [requiredValidator('Publishing year')],
      city: [requiredValidator('City')],
      numberOfPages: [requiredValidator('Number of pages')],
      price: [requiredValidator('Price')],
      authors: [],
      numberOfInstances: [requiredValidator('Name')],
      category: [requiredValidator('Category')],
      description: [requiredValidator('Description')],
      pictureFile: []
    };

    const controls = this.formService.createFormControls(initialValues, validators);

    return this.formBuilder.group(controls);
  }
}
