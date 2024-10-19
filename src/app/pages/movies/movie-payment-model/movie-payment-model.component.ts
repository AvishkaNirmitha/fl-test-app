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
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { removeWhiteSpaces } from "src/app/services/validations/validator";
import { TicketService } from "src/app/services/ticket.service";

@Component({
  selector: "app-movie-payment-model",
  templateUrl: "./movie-payment-model.component.html",
  styleUrls: ["./movie-payment-model.component.scss"],
})
export class MoviePaymentModelComponent implements OnInit, OnDestroy {
  loading: Boolean = false;

  // ticketPrice = {
  //   halfTicketPrice: 150,
  //   fullTicketPrice: 300,
  // };

  rForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<MoviePaymentModelComponent>,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    private _FormBuilder: FormBuilder,

    private _JwtTokenValidatorService: JwtTokenValidatorService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    public dialog: MatDialog,
    private ticketService: TicketService
  ) {
    this.rForm = this._FormBuilder.group({
      cardNumber: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.pattern("^[0-9]{13,19}$"), // 13-19 digits only
        ]),
      ],
      cardHolderName: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50), // Name between 2 to 50 characters
          Validators.pattern("^[a-zA-Z ]+$"), // Letters and spaces only
        ]),
      ],
      cardMonth: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.pattern("^(0[1-9]|1[0-2])$"), // 01-12 for months
        ]),
      ],
      cardYear: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.pattern("^[0-9]{4}$"), // 4 digits for year
          Validators.min(new Date().getFullYear()), // Current year or later
        ]),
      ],
      cardCvc: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.pattern("^[0-9]{3,4}$"), // 3 or 4 digits for CVC
        ]),
      ],
    });
  }

  ngOnInit(): void {
    console.log("parentData", this.parentData?.data);
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

  calTotal() {}

  createTicket() {
    console.log(this.parentData.data);
    // return;

    this.loading = true;
    this.ticketService
      .createTicket(this.parentData.data)
      .then((response) => {
        this.loading = false;
        console.log("Ticket created successfully!", response);

        this.dialogRef.close({
          status: true,
        });
      })
      .catch((error) => {
        this.loading = false;
        console.error("Error creating ticket:", error);
      });
  }
}
