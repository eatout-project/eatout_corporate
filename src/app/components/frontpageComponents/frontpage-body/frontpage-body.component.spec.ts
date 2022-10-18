import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageBodyComponent } from './frontpage-body.component';

describe('FrontpageBodyComponent', () => {
  let component: FrontpageBodyComponent;
  let fixture: ComponentFixture<FrontpageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontpageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
