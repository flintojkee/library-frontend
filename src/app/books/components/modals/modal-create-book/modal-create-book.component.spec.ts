import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateBookComponent } from './modal-create-book.component';

describe('ModalCreateBookComponent', () => {
  let component: ModalCreateBookComponent;
  let fixture: ComponentFixture<ModalCreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
