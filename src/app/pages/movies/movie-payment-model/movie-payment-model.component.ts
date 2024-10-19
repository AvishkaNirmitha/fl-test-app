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
import { UserService } from "src/app/services/user.service";
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

    private userService: UserService,
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
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
      ],
      cardHolderName: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
      ],
      cardMonth: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
      ],
      cardYear: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
      ],
      cardCvc: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
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
