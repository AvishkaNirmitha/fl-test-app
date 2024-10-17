import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { ClipboardService } from "src/app/services/clipboard.service";
import { GlobalService } from "src/app/services/global.service";
import { JwtTokenValidatorService } from "src/app/services/jwt-token-validator.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { WalletService } from "src/app/services/wallet.service";
import { WithdrawModelComponent } from "../withdraw-model/withdraw-model.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-wallet-view",
  templateUrl: "./wallet-view.component.html",
  styleUrls: ["./wallet-view.component.scss"],
})
export class WalletViewComponent implements OnInit, OnDestroy {
  walletData: any = {
    balance: "0.00",
    // address: "0x09E36FDa0a7E70444a4509B670e94Bc834827b5b",
    address: "loading..",
    xtr_token_balance: 0,
  };
  loading: boolean = false;
  userDetails: Object = {};

  loggedUserSubscription: Subscription;

  // tradeAccountsSubscription: Subscription;
  // uiReloadSubscription: Subscription;
  allTradingAccounts: Array<Object> = [];

  rForm: FormGroup;
  pendingDepositsCount = 0;
  private intervalId: any;

  constructor(
    private clipboardService: ClipboardService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private _JwtService: JwtService,
    private _JwtTokenValidatorService: JwtTokenValidatorService,
    private _WalletService: WalletService,
    private globalService: GlobalService,
    private _FormBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.rForm = this._FormBuilder.group({
      withdraw_address: [null, Validators.compose([Validators.required])],
      amount: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(0.01),
          Validators.max(10000000000),
        ]),
      ],
      verification_code: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      ],
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

  ngOnInit(): void {
    this.getWalletHistory(true);
    this.getTradingFees();
    this.getPendingDespotHistoryOfUser();
    // this.tradeAccountsSubscription = this._NavBarService
    //   .getUserTradeArray()
    //   .subscribe((value) => {
    //     if (value) this.allTradingAccounts = value;
    //   });

    // reload trades after position table change
    // this.uiReloadSubscription = this._TradeService
    //   .getReloadStatus()
    //   .subscribe((status) => {
    //     if (status) {
    //       this.getWalletHistory();
    //     }
    //   });

    this.loggedUserSubscription = this.globalService
      .getLoggedUserObj()
      .subscribe((value: any) => {
        if (value) {
          this.userDetails = value;
        }
      });

    this.intervalId = setInterval(() => {
      this.getWalletHistory(false);
    }, 25000);
  }

  ngOnDestroy(): void {
    this.loggedUserSubscription?.unsubscribe();

    clearInterval(this.intervalId);
  }

  public copyToClipBoard(data: any) {
    this.clipboardService.copyToClipboard(data);

    this._MsgHandelService.showSuccessMsg(
      "",
      "USDT Address copied to clipboard"
    );
  }

  private getWalletHistory(shouldDisplayLoading: boolean) {
    console.log("Fetching Balance");

    if (shouldDisplayLoading) {
      this.loading = true;
    }
    this._WalletService
      .getWalletBalance(this._JwtTokenValidatorService.getLoggedUserId())
      .subscribe(
        (response) => {
          if (response.status) {
            this.loading = false;
            // this.walletData["balance"] = response?.data?.balance | 0;
            // if (response?.data?.balance) {
            //   this.walletData["balance"] = response?.data?.balance;
            // } else {
            //   this.walletData["balance"] = 0;
            // }

            this.walletData["balance"] = response?.data?.balance
              ? response?.data?.balance
              : 0;

            this.walletData["xtr_token_balance"] = response?.data?.xtr_balance
              ? response?.data?.xtr_balance
              : 0;

            this.walletData["is_trade_started"] =
              response?.data?.is_trade_started;
            if (response?.data?.address) {
              this.walletData["address"] = response?.data?.address;
            }
            const expiredDate = this.generateExpireDate(
              response?.data?.trade_started_at,
              30
            );
            this.walletData = {
              ...this.walletData,
              ...response?.data,
              expired_date: expiredDate,
            };
          }
        },
        (error) => {
          this.loading = false;
          this._MsgHandelService.handleError(error);
        }
      );
  }

  public startTrading() {
    // if (!this.allTradingAccounts.length || !this.allTradingAccounts[0]['_id']) {
    //   return this._MsgHandelService.showErrorMsg(
    //     'please create trading account before start trading',
    //     ''
    //   );
    // }
    // // show confirmation alert
    // Swal.fire({
    //   ...confirmationDialogConfig.defaultConfimation,
    //   title: 'Are you sure?',
    //   text: `You want to start trading`,
    // }).then((status) => {
    //   if (status.value) {
    //     this.loading = true;
    //     this._WalletService
    //       .startTrading({
    //         user_id: this._JwtTokenValidatorService.getLoggedUserId(),
    //         // trade_account_id: this.allTradingAccounts[0]['_id'],
    //       })
    //       .subscribe(
    //         (response) => {
    //           if (response.status) {
    //             this.loading = false;
    //             //show success message
    //             this._MsgHandelService.showSuccessMsg(
    //               'Successfully started trading',
    //               ''
    //             );
    //           }
    //         },
    //         (error) => {
    //           this.loading = false;
    //           this._MsgHandelService.handleError(error);
    //         }
    //       );
    //   }
    // });
  }

  public reloadTransaction() {
    this.loading = true;
    this._WalletService
      .reloadTransactions({
        user_id: this._JwtTokenValidatorService.getLoggedUserId(),
      })
      .subscribe(
        (response) => {
          if (response.status) {
            this.loading = false;
            //show success message
            this._MsgHandelService.showSuccessMsg(
              "Your deposit has been added to the queue.",
              ""
            );
            this.getPendingDespotHistoryOfUser();
          }
        },
        (error) => {
          this.loading = false;
          this._MsgHandelService.handleError(error);
        }
      );
  }

  /**
   * getting pending deposit history of user without pagination
   */
  getPendingDespotHistoryOfUser() {
    this.loading = true;
    this._WalletService.getPendingDespots().subscribe(
      (response) => {
        console.log("getWalletPending deposits response", response);

        if (response.status) {
          this.loading = false;
          try {
            this.pendingDepositsCount = response.data.length;
          } catch (error) {
            this.pendingDepositsCount = 0;
          }
        }
      },
      (error) => {
        this.loading = false;
        this._MsgHandelService.handleError(error);
      }
    );
  }

  generateExpireDate(date: any, days: any) {
    // if (!date) return undefined;
    // const updatedDate = new Date(date);
    // updatedDate.setDate(updatedDate.getDate() + days);
    // return updatedDate;
  }

  private getTradingFees() {
    // this.loading = true;
    // this._WalletService
    //   .getTradingFees(this._JwtTokenValidatorService.getLoggedUserId())
    //   .subscribe(
    //     (response) => {
    //       if (response.status) {
    //         this.loading = false;
    //         if (response?.data?.deductibleFee) {
    //           this.walletData['setup_fee'] =
    //             response?.data?.deductibleFee * (60 / 100);
    //           this.walletData['monthly_subscription'] =
    //             response?.data?.deductibleFee * (40 / 100);
    //         } else {
    //           this.walletData['setup_fee'] = 0;
    //           this.walletData['monthly_subscription'] = 0;
    //         }
    //         this.walletData = {
    //           ...this.walletData,
    //           ...response.data,
    //         };
    //       }
    //     },
    //     (error) => {
    //       this.loading = false;
    //       this._MsgHandelService.handleError(error);
    //     }
    //   );
  }

  openWithdrawModel() {
    if (!this.walletData["xtr_token_balance"]) {
      return this._MsgHandelService.showErrorMsg(
        "",
        "can not find enough Available balance in your wallet"
      );
    }

    const dialogRef = this.dialog.open(WithdrawModelComponent, {
      width: "515px",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        userDetails: this.userDetails,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.status && result?.navigate_to_profile_page) {
        this.router.navigateByUrl("/profile");
      }
    });
  }
}
