import { TestBed } from '@angular/core/testing';

import { AuthFormsService } from './auth-forms.service';

describe('AuthFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFormsService = TestBed.get(AuthFormsService);
    expect(service).toBeTruthy();
  });
});
