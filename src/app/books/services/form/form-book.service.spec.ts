import { TestBed } from '@angular/core/testing';

import { FormBookService } from './form-book.service';

describe('FormBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormBookService = TestBed.get(FormBookService);
    expect(service).toBeTruthy();
  });
});
