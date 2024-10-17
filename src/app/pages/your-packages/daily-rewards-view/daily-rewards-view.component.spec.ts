import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRewardsViewComponent } from './daily-rewards-view.component';

describe('DailyRewardsViewComponent', () => {
  let component: DailyRewardsViewComponent;
  let fixture: ComponentFixture<DailyRewardsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyRewardsViewComponent]
    });
    fixture = TestBed.createComponent(DailyRewardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
