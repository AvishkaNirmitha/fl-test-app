import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentViewComponent } from './investment-view.component';

describe('InvestmentViewComponent', () => {
  let component: InvestmentViewComponent;
  let fixture: ComponentFixture<InvestmentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentViewComponent]
    });
    fixture = TestBed.createComponent(InvestmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
