import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineReservationButtonComponent } from './decline-reservation-button.component';

describe('DeclineReservationButtonComponent', () => {
  let component: DeclineReservationButtonComponent;
  let fixture: ComponentFixture<DeclineReservationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclineReservationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclineReservationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
