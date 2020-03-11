import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CreateBookForm, IFormComponent, formProperties } from '@library/app/models/forms';
import { FormGroup, AbstractControl } from '@angular/forms';
import { validateForm } from '@library/app/shared/decorators';
import { BaseFormComponent } from '@library/app/shared/utils';

@Component({
  selector: 'lbr-form-create-book',
  templateUrl: './form-create-book.component.html',
  styleUrls: ['./form-create-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCreateBookComponent extends BaseFormComponent<CreateBookForm>
  implements OnInit, IFormComponent<CreateBookForm>, formProperties<CreateBookForm>, OnDestroy {
  name: AbstractControl;
  publishingHouse: AbstractControl;
  publishingYear: AbstractControl;
  city: AbstractControl;
  numberOfPages: AbstractControl;
  price: AbstractControl;
  authors: AbstractControl;
  numberOfInstances: AbstractControl;
  category: AbstractControl;
  description: AbstractControl;
  constructor() {
    super();
  }

  ngOnInit() {
    this.initFormControls(Object.getOwnPropertyNames(new CreateBookForm()));
  }
  ngOnDestroy() {}
}
