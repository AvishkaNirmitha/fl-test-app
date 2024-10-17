import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePaymentModelComponent } from './movie-payment-model.component';

describe('MoviePaymentModelComponent', () => {
  let component: MoviePaymentModelComponent;
  let fixture: ComponentFixture<MoviePaymentModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePaymentModelComponent]
    });
    fixture = TestBed.createComponent(MoviePaymentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
