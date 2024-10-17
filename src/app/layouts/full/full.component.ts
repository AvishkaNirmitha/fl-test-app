import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { MatSidenav } from "@angular/material/sidenav";
import { UserService } from "src/app/services/user.service";
import { GlobalService } from "src/app/services/global.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";

const MOBILE_VIEW = "screen and (max-width: 768px)";
const TABLET_VIEW = "screen and (min-width: 769px) and (max-width: 1024px)";
const MONITOR_VIEW = "screen and (min-width: 1024px)";

@Component({
  selector: "app-full",
  templateUrl: "./full.component.html",
  styleUrls: [],
})
export class FullComponent implements OnInit {
  @ViewChild("leftsidenav")
  public sidenav: MatSidenav | any;

  //get options from service
  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private globalService: GlobalService,
    private msgHandelService: MsgHandelService
  ) {
    this.htmlElement = document.querySelector("html")!;
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes

        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];

        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });

    this.loadAccountData();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }

  loadAccountData() {
    this.userService.getUserById(this.userService.getCurrentUserId()).subscribe(
      (response) => {
        // response.data.is_affiliate_user = false;
        this.globalService.setLoggedUserObj(response.data);
      },
      (error) => {
        // show msg
        // this._MsgHandelService.handleError(error);

        this.msgHandelService.showErrorMsg("", error?.msg);
      }
    );
  }
}
