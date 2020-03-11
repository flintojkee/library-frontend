import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateBookComponent } from './form-create-book.component';

describe('FormCreateBookComponent', () => {
  let component: FormCreateBookComponent;
  let fixture: ComponentFixture<FormCreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreateBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
