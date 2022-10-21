import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountFilledButtonComponent } from './create-account-filled-button.component';

describe('CreateAccountFilledButtonComponent', () => {
  let component: CreateAccountFilledButtonComponent;
  let fixture: ComponentFixture<CreateAccountFilledButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountFilledButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountFilledButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
