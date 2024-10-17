import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WithdrawalsRoutingModule } from "./withdrawals-routing.module";
import { WithdrawalViewComponent } from "./withdrawal-view/withdrawal-view.component";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [WithdrawalViewComponent],
  imports: [
    CommonModule,
    WithdrawalsRoutingModule,
    MatCardModule,
    SharedModule,
  ],
})
export class WithdrawalsModule {}
