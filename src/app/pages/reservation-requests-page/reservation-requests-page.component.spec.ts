import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationRequestsPageComponent } from './reservation-requests-page.component';

describe('ReservationRequestsPageComponent', () => {
  let component: ReservationRequestsPageComponent;
  let fixture: ComponentFixture<ReservationRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationRequestsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
