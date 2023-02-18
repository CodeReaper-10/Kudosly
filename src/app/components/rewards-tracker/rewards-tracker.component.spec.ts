import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsTrackerComponent } from './rewards-tracker.component';

describe('RewardsTrackerComponent', () => {
  let component: RewardsTrackerComponent;
  let fixture: ComponentFixture<RewardsTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
