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
import { WalletService } from "src/app/services/wallet.service";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { WithdrawModelComponent } from "../../wallet/withdraw-model/withdraw-model.component";
import { removeWhiteSpaces } from "src/app/services/validations/validator";

@Component({
  selector: "app-movie-payment-model",
  templateUrl: "./movie-payment-model.component.html",
  styleUrls: ["./movie-payment-model.component.scss"],
})
export class MoviePaymentModelComponent implements OnInit, OnDestroy {
  loading: Boolean = false;

  ticketPrice = {
    halfTicketPrice: 150,
    fullTicketPrice: 300,
  };

  rForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<WithdrawModelComponent>,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    private _FormBuilder: FormBuilder,

    private userService: UserService,
    private _JwtTokenValidatorService: JwtTokenValidatorService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    private walletService: WalletService,
    public dialog: MatDialog
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

      // cardNumber: [
      //   null,
      //   Validators.compose([
      //     removeWhiteSpaces,
      //     Validators.required,
      //     Validators.minLength(42),
      //     Validators.maxLength(42),
      //   ]),
      // ],

      // HalfSeatCount: [
      //   null,
      //   Validators.compose([
      //     Validators.required,
      //     Validators.min(1),
      //     Validators.max(100),
      //   ]),
      // ],

      // bookDate: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("parentData", this.parentData);
  }

  ngOnDestroy(): void {}

  handleWithdraw() {
    this.loading = true;
    this.walletService
      .createWithdrawalRequest({
        // user_id: this.userService.getCurrentUserId(),
        // address: this.rForm.value?.withdraw_address,
        // amount: this.rForm.value?.amount,
        // verification_code: this.rForm.value?.twoFa_auth_code,
      })
      .subscribe(
        (response) => {
          this.loading = false;
          if (response.status) {
            this._MsgHandelService.showSuccessMsg(
              "",
              "Successfully created your withdrawal request"
            );
            this.dialogRef.close({
              status: true,
            });
          }
        },
        (error) => {
          this.loading = false;
          this._MsgHandelService.handleError(error);
        }
      );
  }

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
    // const fullSeats = this.rForm.value?.fullSeatCount
    //   ? this.rForm.value?.fullSeatCount
    //   : 0;
    // const halfSeats = this.rForm.value?.HalfSeatCount
    //   ? this.rForm.value?.HalfSeatCount
    //   : 0;
    // return (
    //   fullSeats * this.ticketPrice.fullTicketPrice +
    //   halfSeats * this.ticketPrice.halfTicketPrice
    // );
  }
}
