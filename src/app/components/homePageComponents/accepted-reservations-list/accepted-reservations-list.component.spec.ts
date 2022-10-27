import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedReservationsListComponent } from './accepted-reservations-list.component';

describe('AcceptedReservationsListComponent', () => {
  let component: AcceptedReservationsListComponent;
  let fixture: ComponentFixture<AcceptedReservationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedReservationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedReservationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
