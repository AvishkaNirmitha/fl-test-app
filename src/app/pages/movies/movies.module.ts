import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesViewComponent } from "./movies-view/movies-view.component";
import { MovieBookingModelComponent } from "./movie-booking-model/movie-booking-model.component";
import { RouterModule } from "@angular/router";
import { TablerIconsModule } from "angular-tabler-icons";
import { QRCodeModule } from "angularx-qrcode";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { moviesRoutes } from "./movies-routing.module";
import { MoviePaymentModelComponent } from './movie-payment-model/movie-payment-model.component';

@NgModule({
  declarations: [MoviesViewComponent, MovieBookingModelComponent, MoviePaymentModelComponent],
  imports: [
    SharedModule,
    CommonModule,
    QRCodeModule,
    RouterModule.forChild(moviesRoutes),
    MaterialModule,
    TablerIconsModule,
  ],
})
export class MoviesModule {}
