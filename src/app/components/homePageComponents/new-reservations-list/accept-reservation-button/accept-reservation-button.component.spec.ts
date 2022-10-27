import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptReservationButtonComponent } from './accept-reservation-button.component';

describe('AcceptReservationButtonComponent', () => {
  let component: AcceptReservationButtonComponent;
  let fixture: ComponentFixture<AcceptReservationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptReservationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptReservationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
