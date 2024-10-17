import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TABLE_CONFIG } from "src/app/config/tableConfig";
import { ClipboardService } from "src/app/services/clipboard.service";
import { DepositHistoryService } from "src/app/services/deposit-history.service";
import { GlobalService } from "src/app/services/global.service";
import { InvestmentPackagesService } from "src/app/services/investment-packages.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReferralsService } from "src/app/services/referrals.service";
import { UserService } from "src/app/services/user.service";
import { RewardWithdrawModelComponent } from "../reward-withdraw-model/reward-withdraw-model.component";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-purchased-packages",
  templateUrl: "./purchased-packages.component.html",
  styleUrls: ["./purchased-packages.component.scss"],
})
export class PurchasedPackagesComponent {
  referralURL: string = "";
  activatedLevel: any = 1;

  private isFirstTime: boolean = true; // check if data loading first time. Otherwise don't need to display page loader

  perPage: number = TABLE_CONFIG.PER_PAGE; // how many record per page
  pageNo: number = TABLE_CONFIG.PAGE_NO; // current navigating page

  isSearchActivated = false;

  loading: boolean = false;

  dataList: any = [];
  getResponse: any = {};
  imagePath = "assets/images/profile/user-4.jpg";

  totalItems: number = 0; // total numbers of records from API

  queryForm: FormGroup;

  loggedUserSubscription: Subscription;

  userDetails: Object = {};

  displayedColumns: string[] = [
    "created_at",
    "exclasses",
    "hrate",
    "profile",
    "parent_email",
  ];
  totalInvitedFriends: any = 0;


  totalInvestmentAmount = 0;
  sumOfUserPackagesROI = 0;
  allPackagesDailyRewardSum = 0;
  investmentAmountAgainstROI = 0;
  expectedReturnReachingValue = 0;

  capitalRecoveryPercentage = "0";
  expectedReturnReachingPercentage = "0";


  constructor(
    private clipboardService: ClipboardService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    private userService: UserService,
    private referralsService: ReferralsService,
    private formBuilder: FormBuilder,
    private depositHistoryService: DepositHistoryService,
    private investmentPackagesService: InvestmentPackagesService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      query: ["", [Validators.required]],
    });

    this.loggedUserSubscription = this.globalService
      .getLoggedUserObj()
      .subscribe((value: any) => {
        if (value) {
          this.userDetails = value;
        }
      });

    this.getAll();
  }

  public copyToClipBoard(data: any, msg: any) {
    this.clipboardService.copyToClipboard(data);

    this._MsgHandelService.showSuccessMsg("", msg);
  }

  getReferralUrl() {
    if (
      this._LocalStorageHandleService.getItem("referral_code") == "undefined" ||
      this._LocalStorageHandleService.getItem("referral_code") == "null"
    ) {
      this._MsgHandelService.showErrorMsg("Cant Find Referral Code", "");
      return;
    }
    // environment.fe_site_url
    this.referralURL = `${window.location.origin
      }/#/authentication/signup/${this._LocalStorageHandleService.getItem(
        "referral_code"
      )}`;
  }

  onPageChanged(event: any) {
    this.pageNo = event;
    this.getAll();
  }

  getOverAllProgressChartData() {
    this.loading = true;

    var params =
      "user_id=" +
      this.userService.getCurrentUserId()

    this.investmentPackagesService.getOverAllProgressChartData(params).subscribe(
      (response) => {
        this.loading = false;
        // this.dataList = response?.data?.investmentRecords;
        try {
          this.totalInvestmentAmount = response?.data?.total_investment_amount;
          this.sumOfUserPackagesROI = response?.data?.sum_of_all_users_packages_roi;
          this.allPackagesDailyRewardSum = response?.data?.current_packages_daily_rewards_sum;
          this.investmentAmountAgainstROI = this.totalInvestmentAmount * this.sumOfUserPackagesROI;

          this.capitalRecoveryPercentage = ((this.allPackagesDailyRewardSum / this.totalInvestmentAmount) * 100).toFixed(2) + "%";

          // this.expectedReturnReachingValue = +(this.totalInvestmentAmount * (this.sumOfUserPackagesROI / 100)).toFixed(2);
          this.expectedReturnReachingPercentage = ((this.allPackagesDailyRewardSum / this.expectedReturnReachingValue) * 100).toFixed(2) + "%"


          // this.capitalRecoveryPercentage = "100%";
          // this.expectedReturnReachingPercentage = "23.45%";

        } catch (error) {
          console.log(error);
        }
        console.log(response);
      },
      (error) => {
        this.loading = false;
        this._MsgHandelService.handleError(error);
      }
    );
  }


  getAll() {
    if (this.isFirstTime) {
      this.loading = true;
      this.isFirstTime = false;
    }
    var query = this.queryForm?.get("query")?.value;
    query = query == null ? "" : query;
    const column = 1;
    const order = "asc";

    var params =
      "user_id=" +
      this.userService.getCurrentUserId() +
      "&limit=100" +
      // this.perPage +
      "&page=" +
      this.pageNo +
      "&search=" +
      query +
      "&column=" +
      column;
    "&order=" + order;

    this.investmentPackagesService.getAllInvestedPackages(params).subscribe(
      (response) => {
        this.loading = false;
        this.dataList = response?.data?.investmentRecords;
        if(this.dataList.length > 0){
          this.dataList = this.dataList.filter((record: { is_refferal_license: any; }) => !record.is_refferal_license);
        }
        this.calculateROIPercentageSum();
        this.getOverAllProgressChartData();
        if (query) {
          this.totalItems =
            response?.data?.recordsFiltered == 0
              ? response?.data?.recordsFiltered
              : response?.data?.recordsTotal;
        } else {
          this.totalItems = response?.data?.recordsTotal;
        }
      },
      (error) => {
        this.loading = false;
        this._MsgHandelService.handleError(error);
      }
    );
  }


  calculateROIPercentageSum(){
    let roiPreSum = 0;
    for (let index = 0; index < this.dataList.length; index++) {
      const element = this.dataList[index];
      if(!element.is_refferal_license){
        roiPreSum += (element.invested_xtr_amount * element?.package[0]?.roi);
      }
    }
    this.expectedReturnReachingValue = (roiPreSum / 100);
    console.log("expectedReturnReachingValue", this.expectedReturnReachingValue);
    
  }

  search() {
    this.isSearchActivated = true;
    this.pageNo = 1;
    this.isFirstTime = true;
    this.getAll();
  }

  reset() {
    this.isSearchActivated = false;
    this.pageNo = 1;
    this.isFirstTime = true;
    this.queryForm.reset();
    // this.getAll();
  }

  openWithdrawModel(row: any) {
    // if (!this.walletData["xtr_token_balance"]) {
    //   return this._MsgHandelService.showErrorMsg(
    //     "",
    //     "can not find enough Available balance in your wallet"
    //   );
    // }

    const dialogRef = this.dialog.open(RewardWithdrawModelComponent, {
      width: "515px",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        userDetails: this.userDetails,
        row: row,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.status && result?.navigate_to_profile_page) {
        this.router.navigateByUrl("/profile");
      }
      if (result?.status && result?.runGetAll) {
        this.getAll();
      }
    });
  }

  ngOnDestroy(): void {
    this.loggedUserSubscription?.unsubscribe();
  }


  navigateToDailyRewardsPage(id : any, name : any){
    this.router.navigateByUrl(`/your-packages/daily-rewards?package=${id}&name=${name}`)
  }

}
