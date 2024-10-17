import { Component } from '@angular/core';
import { MsgHandelService } from 'src/app/services/msg-handel.service';
import { ReferralsService } from 'src/app/services/referrals.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-referrals-earnings',
  templateUrl: './referrals-earnings.component.html',
  styleUrls: ['./referrals-earnings.component.scss']
})
export class ReferralsEarningsComponent {
  loading: boolean = false;

  dataList: any = [];

  constructor(
    private _MsgHandelService: MsgHandelService,
    private userService: UserService,
    private referralsService: ReferralsService
  ) {

  }

  ngOnInit() {
    this.getRefEarningsHistory();
  }

  getRefEarningsHistory() {
    this.loading = true;
    const payload = `user_id=${this.userService.getCurrentUserId()}&limit=100&page=1`;
    this.referralsService.getRefEarningsHistory(payload).subscribe(response => {
      this.loading = false;
      try {
        this.dataList = response?.data?.requests;
        console.log(this.dataList);
      } catch (error) {
        this.dataList = [];
        console.log(error);
      }
    }, error => {
      this.loading = false;
      this._MsgHandelService.handleError(error);
    })
  }

}
