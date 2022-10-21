import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInvertedButtonComponent } from './login-inverted-button.component';

describe('LoginInvertedButtonComponent', () => {
  let component: LoginInvertedButtonComponent;
  let fixture: ComponentFixture<LoginInvertedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInvertedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInvertedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
