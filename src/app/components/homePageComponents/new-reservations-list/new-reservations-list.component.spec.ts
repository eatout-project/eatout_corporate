import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationsListComponent } from './new-reservations-list.component';

describe('NewReservationsListComponent', () => {
  let component: NewReservationsListComponent;
  let fixture: ComponentFixture<NewReservationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReservationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReservationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
