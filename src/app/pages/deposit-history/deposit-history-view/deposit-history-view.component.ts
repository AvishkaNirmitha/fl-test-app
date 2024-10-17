import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TABLE_CONFIG } from "src/app/config/tableConfig";
import { ClipboardService } from "src/app/services/clipboard.service";
import { DepositHistoryService } from "src/app/services/deposit-history.service";
import { GlobalService } from "src/app/services/global.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReferralsService } from "src/app/services/referrals.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-deposit-history-view",
  templateUrl: "./deposit-history-view.component.html",
  styleUrls: ["./deposit-history-view.component.scss"],
})
export class DepositHistoryViewComponent {
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
    private depositHistoryService: DepositHistoryService
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

    this.depositHistoryService.getAll(params).subscribe(
      (response) => {
        // response = {
        //   status: true,
        //   data: {
        //     depositRecords: {
        //       data: [
        //         {
        //           _id: "65e853ade1e62dd49f9c4ee4",
        //           user_id: "65e8422060f3b9fd235f61ec",
        //           from_address: "0xd8EE8d816b423B3D1452E69612725e9E656C8220",
        //           to_address: "0xF528710891A63780b13E894941383aB3950e4e4A",
        //           amount: 0.000672,
        //           txHash: "InternalTx",
        //           txNote: "Wallet deposit transaction fee",
        //           created_at: "2024-03-06T11:29:49.580Z",
        //           updated_at: "2024-03-06T11:29:49.580Z",
        //           __v: 0,
        //         },
        //         {
        //           _id: "65e853abe1e62dd49f9c4ee2",
        //           user_id: "65e8422060f3b9fd235f61ec",
        //           from_address: "0xd8EE8d816b423B3D1452E69612725e9E656C8220",
        //           to_address: "0xF528710891A63780b13E894941383aB3950e4e4A",
        //           amount: 99.999328,
        //           txHash:
        //             "0xcb6c2db503037991d62c0816c288be8b449f794558fe0944c0520a85f0bb6233",
        //           txNote: "Wallet deposit",
        //           created_at: "2024-03-06T11:29:47.631Z",
        //           updated_at: "2024-03-06T11:29:47.631Z",
        //           __v: 0,
        //         },
        //       ],
        //       total_amount: 100,
        //     },
        //     recordsTotal: 2,
        //     recordsFiltered: 2,
        //   },
        // };

        this.loading = false;
        this.dataList = response?.data?.depositRecords?.data;
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
