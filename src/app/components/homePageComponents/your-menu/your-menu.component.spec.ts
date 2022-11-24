import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourMenuComponent } from './your-menu.component';

describe('YourMenuComponent', () => {
  let component: YourMenuComponent;
  let fixture: ComponentFixture<YourMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
