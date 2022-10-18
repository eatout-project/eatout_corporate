import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageBodyComponent } from './loginpage-body.component';

describe('LoginpageBodyComponent', () => {
  let component: LoginpageBodyComponent;
  let fixture: ComponentFixture<LoginpageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
