import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositHistoryViewComponent } from './deposit-history-view.component';

describe('DepositHistoryViewComponent', () => {
  let component: DepositHistoryViewComponent;
  let fixture: ComponentFixture<DepositHistoryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositHistoryViewComponent]
    });
    fixture = TestBed.createComponent(DepositHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
