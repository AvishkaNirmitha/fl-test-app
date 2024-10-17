import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPackageDetailsComponent } from './other-package-details.component';

describe('OtherPackageDetailsComponent', () => {
  let component: OtherPackageDetailsComponent;
  let fixture: ComponentFixture<OtherPackageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherPackageDetailsComponent]
    });
    fixture = TestBed.createComponent(OtherPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
