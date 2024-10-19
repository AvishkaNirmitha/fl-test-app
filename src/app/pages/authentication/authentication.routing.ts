import { Routes } from "@angular/router";

import { AppSideLoginComponent } from "./login/login.component";
import { AppSideRegisterComponent } from "./register/register.component";
import { PublicGuardService } from "src/app/infrastructure/public-guard.service";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

export const AuthenticationRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: AppSideLoginComponent,
        canActivate: [PublicGuardService],
      },
      {
        path: "signup",
        component: AppSideRegisterComponent,
        canActivate: [PublicGuardService],
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        canActivate: [PublicGuardService],
      },
      {
        path: "signup/:id",
        component: AppSideRegisterComponent,
        canActivate: [PublicGuardService],
      },
    ],
  },
];
