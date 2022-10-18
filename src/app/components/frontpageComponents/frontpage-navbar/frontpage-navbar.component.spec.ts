import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageNavbarComponent } from './frontpage-navbar.component';

describe('FrontpageNavbarComponent', () => {
  let component: FrontpageNavbarComponent;
  let fixture: ComponentFixture<FrontpageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontpageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
