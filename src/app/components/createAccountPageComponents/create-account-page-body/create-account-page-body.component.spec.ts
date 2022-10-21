import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountPageBodyComponent } from './create-account-page-body.component';

describe('CreateAccountPageBodyComponent', () => {
  let component: CreateAccountPageBodyComponent;
  let fixture: ComponentFixture<CreateAccountPageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountPageBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
