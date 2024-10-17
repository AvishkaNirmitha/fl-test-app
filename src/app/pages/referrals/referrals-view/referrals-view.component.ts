import { leadingComment } from "@angular/compiler";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ChartComponent } from "ng-apexcharts";
import { Subscription } from "rxjs";
import { ClipboardService } from "src/app/services/clipboard.service";
import { GlobalService } from "src/app/services/global.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReferralsService } from "src/app/services/referrals.service";
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";

// export interface productsData {
//   id: number;
//   imagePath: string;
//   uname: string;
//   position: string;
//   hourRate: number;
//   classes: number;
//   priority: string;
// }

// const ELEMENT_DATA: productsData[] = [
//   {
//     id: 1,
//     imagePath: "assets/images/profile/user-1.jpg",
//     uname: "Mark J. Freeman",
//     position: "English",
//     hourRate: 150,
//     classes: 53,
//     priority: "Available",
//   },
//   {
//     id: 2,
//     imagePath: "assets/images/profile/user-2.jpg",
//     uname: "Andrew McDownland",
//     position: "Project Manager",
//     hourRate: 150,
//     classes: 68,
//     priority: "In Class",
//   },
//   {
//     id: 3,
//     imagePath: "assets/images/profile/user-3.jpg",
//     uname: "Christopher Jamil",
//     position: "Project Manager",
//     hourRate: 150,
//     classes: 94,
//     priority: "Absent",
//   },
//   {
//     id: 4,
//     imagePath: "assets/images/profile/user-4.jpg",
//     uname: "Nirav Joshi",
//     position: "Frontend Engineer",
//     hourRate: 150,
//     classes: 27,
//     priority: "On Leave",
//   },
// ];
@Component({
  selector: "app-referrals-view",
  templateUrl: "./referrals-view.component.html",
  styleUrls: ["./referrals-view.component.scss"],
})
export class ReferralsViewComponent {
  // @ViewChild("chart") chart: ChartComponent = Object.create(null);

  referralURL: string = "";
  activatedLevel: any = 1;

  loading: boolean = false;

  userDetails: any = {};

  allBreadCums = [
    {
      level_name: "Level 1",
      level_active_user_count: 1,
    },
    {
      level_name: "Level 2",
      level_active_user_count: 1,
    },
    {
      level_name: "Level 3",
      level_active_user_count: 1,
    },
    {
      level_name: "Level 4",
      level_active_user_count: 1,
    },
    {
      level_name: "Level 5",
      level_active_user_count: 1,
    },
    {
      level_name: "Level 6",
      level_active_user_count: 1,
    },
    {
      level_name: "Level 7",
      level_active_user_count: 1,
    },
    // {
    //   level_name: "Level 8",
    // },
    // {
    //   level_name: "Level 9",
    // },
    // {
    //   level_name: "Level 10",
    // },
  ];

  totalRefEarnings = 0;

  dataList: any = [];
  getResponse: any = {};
  imagePath = "assets/images/profile/user-4.jpg";

  loggedUserSubscription: Subscription;

  totalInvitedFriends: any = 0;


  constructor(
    private clipboardService: ClipboardService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    private userService: UserService,
    private referralsService: ReferralsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getReferralUrl();

    this.getRefUsers(1);

    this.getTotalRefEarnings();



    this.loggedUserSubscription = this.globalService
      .getLoggedUserObj()
      .subscribe((value: any) => {
        if (value) {
          this.userDetails = value;
        }
      });
  }

  shareOn(site: any) {
    let url = "";
    switch (site) {
      case "facebook":
        // url = encodeURI("https://www.facebook.com/sharer/sharer.php?u=" + this.referralURL);
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.referralURL)}`;
        break;
      case "whatsapp":
        url = `whatsapp://send?text=${encodeURIComponent(this.referralURL)}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(this.referralURL)}`;
        break;
      default:
        break;
    }
    console.log(url);
    
    if (url) window.open(url, "_blank")
  }

  ngOnDestroy() {
    this.loggedUserSubscription?.unsubscribe();
  }

  navigateToEarningHistory() {
    this.router.navigateByUrl("referrals/earnings")
  }

  getBreadCrumbClass(currentLevelIndex: any, level: any) {

    if ((currentLevelIndex + 1 == this.activatedLevel) && (this.dataList?.length >= level.level_active_user_count)) {
      return 'activated-item';
    } else {
      if (currentLevelIndex + 1 == this.activatedLevel) {
        return 'activated-item-not-user-count-active';
      }
      return '';
    }
  }

  getTotalRefEarnings() {
    this.loading = true;
    const payload = `user_id=${this.userService.getCurrentUserId()}`;
    this.referralsService.getRefEarningsSum(payload).subscribe(response => {
      this.loading = false;
      try {
        this.totalRefEarnings = response?.data?.[0]?.commision_in_xtr;
        if (response?.data?.length <= 0) {
          this.totalRefEarnings = 0;
        }
      } catch (error) {
        console.log(error);
        this.totalRefEarnings = 0;
      }

    }, error => {
      this.loading = false;
      this._MsgHandelService.handleError(error);
    })
  }



  public copyToClipBoard(data: any) {
    this.clipboardService.copyToClipboard(data);

    this._MsgHandelService.showSuccessMsg(
      "",
      "Referral URL copied to clipboard"
    );
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

  private getRefUsers(level: any) {
    this.loading = true;

    const payload = `user_id=${this.userService.getCurrentUserId()}&limit=${0}&page=${1}&level=${level}`;

    this.referralsService.getAllRefUsers(payload).subscribe(
      (response) => {
        // response = {
        //   status: true,
        //   data: {
        //     totalInvitedFriends: 2,
        //     refs: [
        //       {
        //         _id: "65e6f1297081f62b93ef069d",
        //         level: 1,
        //         user_id: "65e6e1134f0c28272161e9aa",
        //         children: [
        //           {
        //             user_id: "65e6f1297081f62b93ef0689",
        //             user_email: "mailto:sector22@gmail.com",
        //             user_name: "John Doe",
        //             joined_data: "2024-03-05T10:17:13.402Z",
        //             ref_code: "RU-41666",
        //             _id: "65e6f1297081f62b93ef069e",
        //           },
        //           {
        //             user_id: "65e6f13e7081f62b93ef06ab",
        //             user_email: "mailto:sector23@gmail.com",
        //             user_name: "John Doe",
        //             joined_data: "2024-03-05T10:17:34.882Z",
        //             ref_code: "RU-41667",
        //             _id: "65e6f13f7081f62b93ef06c0",
        //           },
        //         ],
        //         children_count: 2,
        //         created_at: "2024-03-05T10:17:13.506Z",
        //         updated_at: "2024-03-05T10:17:35.040Z",
        //         __v: 0,
        //       },
        //     ],
        //   },
        // };

        if (response.status) {
          this.loading = false;

          this.dataList = response?.data?.refs[0]["children"];
          this.getResponse = response?.data;

          this.totalInvitedFriends = response?.data?.totalInvitedFriends
            ? response?.data?.totalInvitedFriends
            : 0;

          this.activatedLevel = level;
        }
      },
      (error) => {
        this.loading = false;
        this._MsgHandelService.handleError(error);
      }
    );
  }

  loadUserLevelByBreadCums(level: any) {
    this.getRefUsers(level);
  }
}
