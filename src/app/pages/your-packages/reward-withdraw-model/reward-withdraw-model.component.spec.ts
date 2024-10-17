import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardWithdrawModelComponent } from './reward-withdraw-model.component';

describe('RewardWithdrawModelComponent', () => {
  let component: RewardWithdrawModelComponent;
  let fixture: ComponentFixture<RewardWithdrawModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardWithdrawModelComponent]
    });
    fixture = TestBed.createComponent(RewardWithdrawModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
