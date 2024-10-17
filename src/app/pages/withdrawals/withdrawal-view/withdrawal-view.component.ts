import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TABLE_CONFIG } from "src/app/config/tableConfig";
import { ClipboardService } from "src/app/services/clipboard.service";
import { DepositHistoryService } from "src/app/services/deposit-history.service";
import { GlobalService } from "src/app/services/global.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReferralsService } from "src/app/services/referrals.service";
import { UserService } from "src/app/services/user.service";
import { WithdrawalService } from "src/app/services/withdrawal.service";

@Component({
  selector: "app-withdrawal-view",
  templateUrl: "./withdrawal-view.component.html",
  styleUrls: ["./withdrawal-view.component.scss"],
})
export class WithdrawalViewComponent {
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

  displayedColumns: string[] = [
    "created_at",
    "exclasses",
    "hrate",
    "profile",
    "parent_email",
  ];
  totalInvitedFriends: any = 0;
  constructor(
    private clipboardService: ClipboardService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    private userService: UserService,
    private referralsService: ReferralsService,
    private formBuilder: FormBuilder,
    private depositHistoryService: DepositHistoryService,
    private withdrawalService: WithdrawalService
  ) {}

  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      query: ["", [Validators.required]],
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
    this.referralURL = `${
      window.location.origin
    }/#/authentication/signup/${this._LocalStorageHandleService.getItem(
      "referral_code"
    )}`;
  }

  onPageChanged(event: any) {
    this.pageNo = event;
    console.log("this.pageNo", this.pageNo);
    this.getAll();
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
      "&limit=" +
      this.perPage +
      "&page=" +
      this.pageNo +
      "&search=" +
      query +
      "&column=" +
      column;
    "&order=" + order;

    this.withdrawalService.getAll(params).subscribe(
      (response) => {
        this.loading = false;
        this.dataList = response?.data?.requests;
        if (query) {
          // this.totalItems = response?.data?.recordsFiltered;
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
}
