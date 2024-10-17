import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlankComponent } from "./layouts/blank/blank.component";
import { FullComponent } from "./layouts/full/full.component";
import { AuthGuardService } from "./infrastructure/auth-guard.service";
import { PublicGuardService } from "./infrastructure/public-guard.service";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./pages/pages.module").then((m) => m.PagesModule),
        canActivate: [AuthGuardService],
      },
      // {
      //   path: 'ui-components',
      //   loadChildren: () =>
      //     import('./pages/ui-components/ui-components.module').then(
      //       (m) => m.UicomponentsModule
      //     ),
      // },
      // {
      //   path: 'extra',
      //   loadChildren: () =>
      //     import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      // },
      {
        path: "wallet",
        loadChildren: () =>
          import("./pages/wallet/wallet.module").then((m) => m.WalletModule),
        canActivate: [AuthGuardService],
      },
      {
        path: "referrals",
        loadChildren: () =>
          import("./pages/referrals/referrals.module").then(
            (m) => m.ReferralsModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "transactions",
        loadChildren: () =>
          import("./pages/transactions/transactions.module").then(
            (m) => m.TransactionsModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "earnings",
        loadChildren: () =>
          import("./pages/earnings/earnings.module").then(
            (m) => m.EarningsModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./pages/profile/profile.module").then((m) => m.ProfileModule),
        canActivate: [AuthGuardService],
      },
      {
        path: "deposit-history",
        loadChildren: () =>
          import("./pages/deposit-history/deposit-history.module").then(
            (m) => m.DepositHistoryModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "investment",
        loadChildren: () =>
          import("./pages/investment/investment.module").then(
            (m) => m.InvestmentModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "your-packages",
        loadChildren: () =>
          import("./pages/your-packages/your-packages.module").then(
            (m) => m.YourPackagesModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "withdrawals",
        loadChildren: () =>
          import("./pages/withdrawals/withdrawals.module").then(
            (m) => m.WithdrawalsModule
          ),
        canActivate: [AuthGuardService],
      },
      {
        path: "movies",
        loadChildren: () =>
          import("./pages/movies/movies.module").then((m) => m.MoviesModule),
        canActivate: [AuthGuardService],
      },
    ],
  },
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () =>
          import("./pages/authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomePageModule),
      },
    ],
    canActivate: [PublicGuardService],
  },
  // {
  //   path: "features",
  //   component: BlankComponent,
  //   loadChildren: () =>
  //     import("./pages/features/features.module").then((m) => m.FeaturesModule),
  //   pathMatch: "full",
  // },
  // {
  //   path: "pricing",
  //   component: BlankComponent,
  //   loadChildren: () =>
  //     import("./pages/pricing/pricing.module").then((m) => m.PricingModule),
  //   pathMatch: "full",
  // },
  // {
  //   path: "two-factor-verification",
  //   component: BlankComponent,
  //   loadChildren: () =>
  //     import(
  //       "./pages/two-factor-verification/two-factor-verification.module"
  //     ).then((m) => m.TwoFactorVerificationModule),
  //   pathMatch: "full",
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
