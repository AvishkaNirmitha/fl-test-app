import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsViewComponent } from './referrals-view.component';

describe('ReferralsViewComponent', () => {
  let component: ReferralsViewComponent;
  let fixture: ComponentFixture<ReferralsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralsViewComponent]
    });
    fixture = TestBed.createComponent(ReferralsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
