import { Component } from "@angular/core";
import { MovieBookingModelComponent } from "../movie-booking-model/movie-booking-model.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-movies-view",
  templateUrl: "./movies-view.component.html",
  styleUrls: ["./movies-view.component.scss"],
})
export class MoviesViewComponent {
  constructor(public dialog: MatDialog) {}

  moviewPurchaseModel() {
    const dialogRef = this.dialog.open(MovieBookingModelComponent, {
      width: "45vw",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        userDetails: {},
      },
    });
  }
}
