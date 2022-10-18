import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageFooterComponent } from './frontpage-footer.component';

describe('FrontpageFooterComponent', () => {
  let component: FrontpageFooterComponent;
  let fixture: ComponentFixture<FrontpageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontpageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
