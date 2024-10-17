import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReferralsRoutesRoutingModule } from "./referrals-routing.module";
import { ReferralsViewComponent } from "./referrals-view/referrals-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { QRCodeModule } from "angularx-qrcode";
import { MaterialModule } from "src/app/material.module";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { TablerIconsModule } from "angular-tabler-icons";
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { ReferralsEarningsComponent } from './referrals-earnings/referrals-earnings.component';


@NgModule({
  declarations: [ReferralsViewComponent, ReferralsEarningsComponent],
  imports: [
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
export class ReferralsModule {}
