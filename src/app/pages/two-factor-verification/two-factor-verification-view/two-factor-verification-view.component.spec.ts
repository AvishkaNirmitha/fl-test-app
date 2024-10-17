import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorVerificationViewComponent } from './two-factor-verification-view.component';

describe('TwoFactorVerificationViewComponent', () => {
  let component: TwoFactorVerificationViewComponent;
  let fixture: ComponentFixture<TwoFactorVerificationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoFactorVerificationViewComponent]
    });
    fixture = TestBed.createComponent(TwoFactorVerificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
