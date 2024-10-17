import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPageViewComponent } from './pricing-page-view.component';

describe('PricingPageViewComponent', () => {
  let component: PricingPageViewComponent;
  let fixture: ComponentFixture<PricingPageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingPageViewComponent]
    });
    fixture = TestBed.createComponent(PricingPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
