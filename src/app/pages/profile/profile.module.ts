import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutes } from "./profile-routing.module";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { TablerIconsModule } from "angular-tabler-icons";
import { QRCodeModule } from "angularx-qrcode";
import { NgApexchartsModule } from "ng-apexcharts";
import { MaterialModule } from "src/app/material.module";
import { AuthConfirmComponent } from "./auth-confirm/auth-confirm.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [ProfileViewComponent, AuthConfirmComponent],
  imports: [
    CommonModule,
    // QRCodeModule,
    RouterModule.forChild(ProfileRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TablerIconsModule,
    // MatCardModule,
    // NgApexchartsModule,
    // MatTableModule,
    // MatSlideToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

    // NgbNavModule,
  ],
})
export class ProfileModule {}
