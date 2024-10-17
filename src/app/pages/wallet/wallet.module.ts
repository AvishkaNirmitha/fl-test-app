import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WalletRoutes } from "./wallet-routing.module";
import { WalletViewComponent } from "./wallet-view/wallet-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { QRCodeModule } from "angularx-qrcode";
import { WithdrawModelComponent } from "./withdraw-model/withdraw-model.component";
import { SharedModule } from "src/app/shared/shared/shared.module";

// const QRCodeModule = require('@types/qrcode');

@NgModule({
  declarations: [WalletViewComponent, WithdrawModelComponent],
  imports: [
    SharedModule,
    CommonModule,
    QRCodeModule,
    RouterModule.forChild(WalletRoutes),
    MaterialModule,
    TablerIconsModule,
  ],
})
export class WalletModule {}
