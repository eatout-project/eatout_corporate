import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSideNavbarComponent } from './homepage-side-navbar.component';

describe('ReservationRequestsSideNavbarComponent', () => {
  let component: HomepageSideNavbarComponent;
  let fixture: ComponentFixture<HomepageSideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSideNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
