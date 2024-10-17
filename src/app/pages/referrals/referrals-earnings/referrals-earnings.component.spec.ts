import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsEarningsComponent } from './referrals-earnings.component';

describe('ReferralsEarningsComponent', () => {
  let component: ReferralsEarningsComponent;
  let fixture: ComponentFixture<ReferralsEarningsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralsEarningsComponent]
    });
    fixture = TestBed.createComponent(ReferralsEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
