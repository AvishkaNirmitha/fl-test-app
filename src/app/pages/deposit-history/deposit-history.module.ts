import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepositHistoryRoutingModule } from "./deposit-history-routing.module";
import { DepositHistoryViewComponent } from "./deposit-history-view/deposit-history-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { TablerIconsModule } from "angular-tabler-icons";
import { QRCodeModule } from "angularx-qrcode";
import { NgApexchartsModule } from "ng-apexcharts";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { ReferralsRoutesRoutingModule } from "../referrals/referrals-routing.module";

@NgModule({
  declarations: [DepositHistoryViewComponent],
  imports: [
    CommonModule,
    DepositHistoryRoutingModule,
    CommonModule,
    QRCodeModule,
    // RouterModule.forChild(ReferralsRoutes),
    ReferralsRoutesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TablerIconsModule,
    MatCardModule,
    NgApexchartsModule,
    MatTableModule,
    SharedModule,
  ],
})
export class DepositHistoryModule {}
