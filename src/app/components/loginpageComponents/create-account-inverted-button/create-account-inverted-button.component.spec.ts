import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountInvertedButtonComponent } from './create-account-inverted-button.component';

describe('CreateAccountButtonComponent', () => {
  let component: CreateAccountInvertedButtonComponent;
  let fixture: ComponentFixture<CreateAccountInvertedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountInvertedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountInvertedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
