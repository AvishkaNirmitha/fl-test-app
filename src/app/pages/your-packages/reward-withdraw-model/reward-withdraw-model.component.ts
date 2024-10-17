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
import { removeWhiteSpaces } from "src/app/services/validations/validator";
import { WalletService } from "src/app/services/wallet.service";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { environment } from "src/environments/environment";
import { WithdrawModelComponent } from "../../wallet/withdraw-model/withdraw-model.component";
import { InvestmentPackagesService } from "src/app/services/investment-packages.service";

@Component({
  selector: "app-reward-withdraw-model",
  templateUrl: "./reward-withdraw-model.component.html",
  styleUrls: ["./reward-withdraw-model.component.scss"],
})
export class RewardWithdrawModelComponent implements OnInit, OnDestroy {
  loading: Boolean = false;
  verfication_code_sent: boolean = false;
  verificationResponse: Object = {};
  service_fee = environment.service_fee_percentage;

  rForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RewardWithdrawModelComponent>,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    private _FormBuilder: FormBuilder,

    private userService: UserService,
    private _JwtTokenValidatorService: JwtTokenValidatorService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    private walletService: WalletService,
    private InvestmentPackagesService: InvestmentPackagesService,
    public dialog: MatDialog
  ) {
    this.rForm = this._FormBuilder.group({
      // withdraw_address: [
      //   null,
      //   Validators.compose([
      //     removeWhiteSpaces,
      //     Validators.required,
      //     Validators.minLength(42),
      //     Validators.maxLength(42),
      //   ]),
      // ],
      amount: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(0.01),
          Validators.max(10000000000),
        ]),
      ],
      // verification_code: [
      //   null,
      //   Validators.compose([
      //     Validators.required,
      //     Validators.minLength(6),
      //     Validators.maxLength(6),
      //   ]),
      // ],
      twoFa_auth_code: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      ],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  handleWithdraw() {
    this.loading = true;
    this.InvestmentPackagesService.TransferRewards({
      investment_record_id: this.parentData.row._id,
      user_id: this.userService.getCurrentUserId(),
      amount: this.rForm.value?.amount,
      auth_code: this.rForm.value?.twoFa_auth_code,
    }).subscribe(
      (response) => {
        this.loading = false;
        if (response.status) {
          this._MsgHandelService.showSuccessMsg(
            "",
            "Successfully transferred your reward to wallet"
          );
          this.dialogRef.close({
            status: true,
            runGetAll: true,
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

  goToProfilePage() {
    this.dialogRef.close({
      status: true,
      navigate_to_profile_page: true,
    });
  }
}
