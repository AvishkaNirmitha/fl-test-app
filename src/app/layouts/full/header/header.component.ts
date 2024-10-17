import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { XtrRateService } from "src/app/services/xtr-rate.service";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;
  xtr_rate = 0;

  constructor(
    public dialog: MatDialog,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private xtrRateService: XtrRateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getXTRRate();
  }

  logOut(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "30vw",
      data: {
        title: "Please Confirm",
        msg: "Do you want to logout?",
      },
      panelClass: "confirmation-dialog",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this._LocalStorageHandleService.destroyAll();

          this._MsgHandelService.showSuccessMsg("", "Successfully Logout");

          this.router.navigateByUrl("/authentication/login");
        }
      }
    });
  }

  private getXTRRate() {
    this.xtrRateService.getXtrRate().subscribe(
      (response) => {
        if (response.status) {
          this.xtr_rate = response?.data?.price ? response?.data?.price : 0;
        }
      },
      (error) => {
        // this.loading = false;
        this._MsgHandelService.handleError(error);
      }
    );
  }
}
