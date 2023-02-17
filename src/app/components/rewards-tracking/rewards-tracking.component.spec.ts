import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsTrackingComponent } from './rewards-tracking.component';

describe('RewardsTrackingComponent', () => {
  let component: RewardsTrackingComponent;
  let fixture: ComponentFixture<RewardsTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
