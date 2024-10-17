import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { TablerIconsModule } from "angular-tabler-icons";
import { NgApexchartsModule } from "ng-apexcharts";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { DashboardService } from "src/app/services/dashboard.service";
import { JwtTokenValidatorService } from "src/app/services/jwt-token-validator.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TablerIconsModule,
    MatCardModule,
    MatTableModule,
    CommonModule,
    NgApexchartsModule,
  ],
})
export class AppDashboardComponent {
  loading: boolean = false;

  dashboardData = {
    total_ref_count: 0,
    direct_referal_count: 0,
    total_roi: 0,
    total_investments_by_user: 0,
  };
  lastXTRPrice = 0;

  public salesChart: any = {
    series: [
      {
        name: "",
        color: "#8763da",
        data: [],
      },
    ],

    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#8763da"],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
  };

  constructor(
    private dashboardService: DashboardService,
    private jwtTokenValidatorService: JwtTokenValidatorService,
    private userService: UserService,
    private msgHandelService: MsgHandelService
  ) {}

  ngOnInit(): void {
    this.getTotalRefCount();
    this.getTotalROI();
    this.getTotalInvestment();

    this.getXTRPriceChart();
  }

  private getTotalRefCount() {
    this.loading = true;
    this.dashboardService
      .getTotalRefCount(`user_id=${this.userService.getCurrentUserId()}`)
      .subscribe(
        (response) => {
          if (response.status) {
            this.loading = false;

            this.dashboardData["total_ref_count"] = response?.data
              ?.total_ref_count
              ? response?.data?.total_ref_count
              : 0;
            this.dashboardData["direct_referal_count"] = response?.data
              ?.direct_referal_count
              ? response?.data?.direct_referal_count
              : 0;
          }
        },
        (error) => {
          this.loading = false;
          this.msgHandelService.handleError(error);
        }
      );
  }

  private getTotalROI() {
    // this.loading = true;
    this.dashboardService
      .getTotalROI(`user_id=${this.userService.getCurrentUserId()}`)
      .subscribe(
        (response) => {
          if (response.status) {
            // this.loading = false;

            this.dashboardData["total_roi"] = response?.data?.total_roi
              ? response?.data?.total_roi
              : 0;
          }
        },
        (error) => {
          // this.loading = false;
          this.msgHandelService.handleError(error);
        }
      );
  }

  private getTotalInvestment() {
    // this.loading = true;
    this.dashboardService
      .getTotalInvestments(`user_id=${this.userService.getCurrentUserId()}`)
      .subscribe(
        (response) => {
          if (response.status) {
            // this.loading = false;

            this.dashboardData["total_investments_by_user"] = response?.data
              ?.total_investments_by_user
              ? response?.data?.total_investments_by_user
              : 0;
          }
        },
        (error) => {
          // this.loading = false;
          this.msgHandelService.handleError(error);
        }
      );
  }

  private getXTRPriceChart() {
    // this.loading = true;
    this.dashboardService.getXTRData().subscribe(
      (response) => {
        // response = {
        //   status: true,
        //   data: {
        //     prices: [1, 1, 4, 5, 6],
        //     // prices: [],
        //     // dates: [],
        //     dates: [
        //       "2024-03-09T14:39:58.044Z",
        //       "2024-03-14T07:34:30.219Z",
        //       "2024-03-15T06:52:49.405Z",
        //       "2024-03-15T06:54:12.259Z",
        //     ],
        //   },
        // };

        if (response.status) {
          let convertedDates = [];

          if (response?.data?.dates.length) {
            convertedDates = response?.data?.dates?.map((date: any) =>
              this.convertDateToDefaultFormat(date)
            );
          } else {
            convertedDates = [];
          }

          this.salesChart = {
            series: [
              {
                name: "TEX PRice",
                data: response?.data?.prices.length
                  ? response?.data?.prices
                  : [],
              },
            ],
            xaxis: {
              categories: convertedDates,
            },
            chart: {
              type: "area",
              fontFamily: "'Plus Jakarta Sans', sans-serif;",
              foreColor: "#adb0bb",
              toolbar: {
                show: false,
              },
              height: 200,
              sparkline: {
                enabled: true,
              },
              group: "sparklines",
            },

            // chart: {
            //   height: 350,
            //   type: "line",
            //   zoom: {
            //     enabled: false,
            //   },
            // },

            stroke: {
              curve: "smooth",
              width: 2,
            },
            fill: {
              colors: ["#8763da"],
              type: "solid",
              opacity: 0.05,
            },
            markers: {
              size: 0,
            },
            tooltip: {
              theme: "dark",
              x: {
                show: false,
              },
            },
          };

          this.lastXTRPrice = response?.data?.prices.length
            ? response?.data?.prices[response?.data?.prices.length - 1]
            : 0;
        }
      },
      (error) => {
        // this.loading = false;
        this.msgHandelService.handleError(error);
      }
    );
  }

  convertDateToDefaultFormat(timestamp: any) {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[0];
  }
}
