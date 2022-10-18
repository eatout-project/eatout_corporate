import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginButtonComponent } from './admin-login-button.component';

describe('LoginButtonComponent', () => {
  let component: AdminLoginButtonComponent;
  let fixture: ComponentFixture<AdminLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
