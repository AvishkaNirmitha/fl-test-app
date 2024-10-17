import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { ClipboardService } from "src/app/services/clipboard.service";
import { GlobalService } from "src/app/services/global.service";
import { InvestmentPackagesService } from "src/app/services/investment-packages.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReferralsService } from "src/app/services/referrals.service";
import { UserService } from "src/app/services/user.service";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { environment } from "src/environments/environment";
import { OtherPackageDetailsComponent } from "../other-package-details/other-package-details.component";

@Component({
  selector: "app-investment-view",
  templateUrl: "./investment-view.component.html",
  styleUrls: ["./investment-view.component.scss"],
})
export class InvestmentViewComponent {
  // @ViewChild("chart") chart: ChartComponent = Object.create(null);

  referralURL: string = "";
  activatedLevel: any = 1;

  loading: boolean = false;

  loggedUserSubscription: Subscription;

  userDetails: any = {};

  dataList: any = [];
  getResponse: any = {};
  imagePath = "assets/images/profile/user-4.jpg";

  displayedColumns: string[] = [
    "created_at",
    "exclasses",
    "hrate",
    "profile",
    "parent_email",
  ];
  totalInvitedFriends: any = 0;

  firstPackage = {
    name: "Referral License",
    min_xtr_balance: 20,
    max_xtr_balance: 0,
    service_fee_percentage: 0,
  };

  rForm: FormGroup;

  constructor(
    private clipboardService: ClipboardService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    private userService: UserService,
    private referralsService: ReferralsService,
    private investmentPackagesService: InvestmentPackagesService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.rForm = this.formBuilder.group({
      minDeposit: [null, Validators.required], // Add validators as needed
    });

    this.getAll();

    this.loggedUserSubscription = this.globalService
      .getLoggedUserObj()
      .subscribe((value: any) => {
        if (value) {
          this.userDetails = value;
        }
      });
  }

  public copyToClipBoard(data: any) {
    this.clipboardService.copyToClipboard(data);

    this._MsgHandelService.showSuccessMsg(
      "",
      "Referral URL copied to clipboard"
    );
  }

  private getAll() {
    this.loading = true;

    let column = 1;
    let order = "asc";

    var payload =
      "limit=" + 100 + "&page=" + 1 + "&column=" + column + "&order=" + order;

    this.investmentPackagesService.getAll(payload).subscribe(
      (response) => {
        if (response.status) {
          this.loading = false;

          this.createForm(response?.data?.packageRecords);
        }
      },
      (error) => {
        this.loading = false;
        this._MsgHandelService.handleError(error);
      }
    );
  }

  createForm(dataList = []) {
    dataList.map((item, index) => {
      // Inside ngOnInit or wherever appropriate
      this.addNewField("package" + index, item?.["min_xtr_balance"], [
        Validators.required,
        Validators.max(item?.["max_xtr_balance"]),
        Validators.min(item?.["min_xtr_balance"]),
      ]);
    });

    this.dataList = dataList;
  }

  addNewField(
    fieldName: string,
    initialValue: any = null,
    validators: any[] = []
  ): void {
    this.rForm.addControl(
      fieldName,
      this.formBuilder.control(initialValue, validators)
    );
  }

  generateAdminCharge(amount: any = 0, percentage: number = 0): string {
    const adminCharge: number = amount * (percentage / 100);
    return adminCharge.toFixed(2).toString();
  }

  getImagePath(image: any) {
    return environment.image_load_url.size300 + image;
  }

  validateMinMaxValue(index: number) {
    return (
      (this.rForm.controls["package" + index]?.errors?.["min"] ||
        this.rForm.controls["package" + index]?.errors?.["max"]) &&
      this.rForm.controls["package" + index]?.touched
    );
  }

  validateFormRequiredState(index: number) {
    return this.rForm.controls["package" + index]?.errors?.["required"];
  }

  handleInvestClick(index: number, item: any) {
    if (!this.rForm.get("package" + index)?.valid) return;

    let totalPriceToBuy = 0; // in TEX format
    let selectedItemPrice = parseFloat(this.rForm.value["package" + index]);
    totalPriceToBuy =
      selectedItemPrice +
      parseFloat(
        this.generateAdminCharge(
          selectedItemPrice,
          this.dataList[index].service_fee_percentage
        )
      );

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "30vw",
      data: {
        title: "Please Confirm",
        msg: `Do you want to invest on this package? Total of ${totalPriceToBuy} TEX will be deduct from your wallet`,
      },
      panelClass: "confirmation-dialog",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this.InvestOnPackage(index, item);
        }
      }
    });
  }
  handleRefPackageClick() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "30vw",
      data: {
        title: "Please Confirm",
        msg: `Do you want to purchase on this Referral License? Total of ${this?.firstPackage?.min_xtr_balance} TEX will be deduct from your wallet`,
      },
      panelClass: "confirmation-dialog",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this.loading = true;
          this.investmentPackagesService.refLicensePurchase({}).subscribe(
            (response: any) => {
              if (response.status) {
                this.loading = false;
                //show success message
                this._MsgHandelService.showSuccessMsg(
                  "Successfully purchased on referral package",
                  ""
                );

                this.globalService.setLoggedUserObj(response.data);
              }
            },
            (error: any) => {
              this.loading = false;
              this._MsgHandelService.handleError(error);
            }
          );
        }
      }
    });
  }

  InvestOnPackage(item_index: number, item: any) {
    this.loading = true;
    this.investmentPackagesService
      .investPackage({
        package_id: item?._id,
        invested_amount: parseFloat(this.rForm.value["package" + item_index]),
      })
      .subscribe(
        (response: any) => {
          if (response.status) {
            this.loading = false;
            //show success message
            this._MsgHandelService.showSuccessMsg(
              "Successfully Invested on selected investment package",
              ""
            );
          }
        },
        (error: any) => {
          this.loading = false;
          this._MsgHandelService.handleError(error);
        }
      );
  }

  ngOnDestroy(): void {
    this.loggedUserSubscription?.unsubscribe();
  }

  getTotalValue(index: number) {
    let selectedItemPrice = parseFloat(this.rForm.value["package" + index]);
    const totalPriceToBuy =
      selectedItemPrice +
      parseFloat(
        this.generateAdminCharge(
          selectedItemPrice,
          this.dataList[index].service_fee_percentage
        )
      );

    return totalPriceToBuy;
  }

  openOtherPackageDetailsModel(row: any) {
    const dialogRef = this.dialog.open(OtherPackageDetailsComponent, {
      width: "515px",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        ...row,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.status && result?.navigate_to_profile_page) {
      }
    });
  }
}
