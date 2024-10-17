import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedPackagesComponent } from './purchased-packages.component';

describe('PurchasedPackagesComponent', () => {
  let component: PurchasedPackagesComponent;
  let fixture: ComponentFixture<PurchasedPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasedPackagesComponent]
    });
    fixture = TestBed.createComponent(PurchasedPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
