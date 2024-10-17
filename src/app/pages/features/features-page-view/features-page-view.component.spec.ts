import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPageViewComponent } from './features-page-view.component';

describe('FeaturesPageViewComponent', () => {
  let component: FeaturesPageViewComponent;
  let fixture: ComponentFixture<FeaturesPageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesPageViewComponent]
    });
    fixture = TestBed.createComponent(FeaturesPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
