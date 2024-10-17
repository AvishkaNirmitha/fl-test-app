import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawModelComponent } from './withdraw-model.component';

describe('WithdrawModelComponent', () => {
  let component: WithdrawModelComponent;
  let fixture: ComponentFixture<WithdrawModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawModelComponent]
    });
    fixture = TestBed.createComponent(WithdrawModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
