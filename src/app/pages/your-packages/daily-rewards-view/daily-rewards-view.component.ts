import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { TABLE_CONFIG } from 'src/app/config/tableConfig';
import { DepositHistoryService } from 'src/app/services/deposit-history.service';
import { InvestmentPackagesService } from 'src/app/services/investment-packages.service';
import { LocalStorageHandleService } from 'src/app/services/local-storage-handle.service';
import { MsgHandelService } from 'src/app/services/msg-handel.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-daily-rewards-view',
  templateUrl: './daily-rewards-view.component.html',
  styleUrls: ['./daily-rewards-view.component.scss']
})
export class DailyRewardsViewComponent {


  perPage: number = TABLE_CONFIG.PER_PAGE; // how many record per page
  pageNo: number = TABLE_CONFIG.PAGE_NO; // current navigating page

  isSearchActivated = false;

  loading: boolean = false;

  dataList: any = [];
  totalItems: number = 0; // total numbers of records from API
  investmentRecordID: any = "";
  packageName : any = "Package";


  constructor(
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private formBuilder: FormBuilder,
    private depositHistoryService: DepositHistoryService,
    private investmentPackagesService: InvestmentPackagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService

  ) { }

  ngOnInit() {
    // this.getDailyRewards();
    this.investmentRecordID = this.activatedRoute.snapshot.queryParamMap.get('package');
    this.packageName = this.activatedRoute.snapshot.queryParamMap.get('name');
    if (this.investmentRecordID) {
      console.log("investmentRecordID", this.investmentRecordID);

      this.getDailyRewards();
    } else {
      this._MsgHandelService.showErrorMsg("Error", "Invalid Package ID")
    }
  }

  onPageChanged(event: any) {
    this.pageNo = event;
    console.log("this.pageNo", this.pageNo);
    this.getDailyRewards();
  }


  getDailyRewards() {
    this.loading = true;
    var params =
      "user_id=" +
      this.userService.getCurrentUserId() +
      "&limit=" +
      this.perPage +
      "&page=" +
      this.pageNo +
      "&investment_record_id=" + this.investmentRecordID;

    this.investmentPackagesService.getDailyRewardsByPurchasedPackage(params).subscribe(response => {
      this.loading = false;
      this.dataList = response?.data?.rewards;
      this.totalItems = response?.data?.recordsTotal;
      console.log(response);
    }, error => {
      this.loading = false;
      console.log(error);

    });
  }

}
