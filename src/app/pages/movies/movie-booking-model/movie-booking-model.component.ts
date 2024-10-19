import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { GlobalService } from "src/app/services/global.service";
import { JwtTokenValidatorService } from "src/app/services/jwt-token-validator.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { removeWhiteSpaces } from "src/app/services/validations/validator";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { environment } from "src/environments/environment";
import { MoviePaymentModelComponent } from "../movie-payment-model/movie-payment-model.component";

@Component({
  selector: "app-movie-booking-model",
  templateUrl: "./movie-booking-model.component.html",
  styleUrls: ["./movie-booking-model.component.scss"],
})
export class MovieBookingModelComponent implements OnInit, OnDestroy {
  loading: Boolean = false;

  ticketPrice = {
    halfTicketPrice: 150,
    fullTicketPrice: 300,
  };

  rForm: FormGroup;

  foods: any = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  constructor(
    private dialogRef: MatDialogRef<MovieBookingModelComponent>,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    private _FormBuilder: FormBuilder,

    private _JwtTokenValidatorService: JwtTokenValidatorService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    public dialog: MatDialog
  ) {
    this.rForm = this._FormBuilder.group({
      fullSeatCount: [null, Validators.compose([Validators.required])],
      HalfSeatCount: [null, Validators.compose([Validators.required])],
      showTime: [1, Validators.compose([Validators.required])],

      bookDate: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("parentData", this.parentData);
  }

  ngOnDestroy(): void {}

  public closeModel() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "30vw",
      data: {
        title: "Please Confirm",
        msg: "Do you want to discard changes?",
      },
      panelClass: "confirmation-dialog",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this.dialogRef.close({
            status: false,
          });
        }
      }
    });
  }

  calTotal() {
    const fullSeats = this.rForm.value?.fullSeatCount
      ? this.rForm.value?.fullSeatCount
      : 0;
    const halfSeats = this.rForm.value?.HalfSeatCount
      ? this.rForm.value?.HalfSeatCount
      : 0;
    return (
      fullSeats * this.ticketPrice.fullTicketPrice +
      halfSeats * this.ticketPrice.halfTicketPrice
    );
  }

  openCardPayment() {
    if (!this.rForm?.valid) {
      return;
    }

    const dialogRef = this.dialog.open(MoviePaymentModelComponent, {
      width: "45vw",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        data: {
          full_ticket_count: this.rForm.value?.fullSeatCount,
          half_ticket_count: this.rForm.value?.HalfSeatCount,
          book_date: new Date(this.rForm.value?.bookDate).toISOString(),
          show_time: this.rForm.value?.showTime,
          movie_name: this.parentData?.data?.name
            ? this.parentData?.data?.name
            : "movie",
          movie_image: this.parentData?.data?.image
            ? this.parentData?.data?.image
            : "movie image",
          price: this.calTotal(),
        },
      },
      panelClass: "movie-model",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this.dialogRef.close({
            status: true,
          });
        }
      }
    });
  }
}
