import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBookingModelComponent } from './movie-booking-model.component';

describe('MovieBookingModelComponent', () => {
  let component: MovieBookingModelComponent;
  let fixture: ComponentFixture<MovieBookingModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieBookingModelComponent]
    });
    fixture = TestBed.createComponent(MovieBookingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
