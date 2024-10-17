import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { YourPackagesRoutingModule } from "./your-packages-routing.module";
import { PurchasedPackagesComponent } from "./purchased-packages/purchased-packages.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { MatCardModule } from "@angular/material/card";
import { RewardWithdrawModelComponent } from "./reward-withdraw-model/reward-withdraw-model.component";
import { MaterialModule } from "src/app/material.module";
import { DailyRewardsViewComponent } from './daily-rewards-view/daily-rewards-view.component';

@NgModule({
  declarations: [PurchasedPackagesComponent, RewardWithdrawModelComponent, DailyRewardsViewComponent],
  imports: [
    CommonModule,
    YourPackagesRoutingModule,

    // QRCodeModule,
    // ReferralsRoutesRoutingModule,
    // MaterialModule,
    // FormsModule,
    // ReactiveFormsModule,

    // MatButtonModule,
    // MatMenuModule,
    // MatIconModule,
    // TablerIconsModule,
    MatCardModule,
    // NgApexchartsModule,
    // MatTableModule,
    MaterialModule,
    SharedModule,
  ],
})
export class YourPackagesModule {}
