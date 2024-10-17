import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvestmentRoutingModule } from "./investment-routing.module";
import { InvestmentViewComponent } from "./investment-view/investment-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { OtherPackageDetailsComponent } from './other-package-details/other-package-details.component';

@NgModule({
  declarations: [InvestmentViewComponent, OtherPackageDetailsComponent],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    TablerIconsModule,
    MatCardModule,
    SharedModule,
  ],
})
export class InvestmentModule {}
