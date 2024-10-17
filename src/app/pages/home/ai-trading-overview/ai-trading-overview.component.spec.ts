import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTradingOverviewComponent } from './ai-trading-overview.component';

describe('AiTradingOverviewComponent', () => {
  let component: AiTradingOverviewComponent;
  let fixture: ComponentFixture<AiTradingOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiTradingOverviewComponent]
    });
    fixture = TestBed.createComponent(AiTradingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
