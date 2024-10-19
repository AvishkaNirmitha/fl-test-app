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
        redirectTo: "/movies",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        redirectTo: "/movies",
        pathMatch: "full",
      },
      // {
      //   path: "dashboard",
      //   loadChildren: () =>
      //     import("./pages/pages.module").then((m) => m.PagesModule),
      //   canActivate: [AuthGuardService],
      // },

      // {
      //   path: "withdrawals",
      //   loadChildren: () =>
      //     import("./pages/withdrawals/withdrawals.module").then(
      //       (m) => m.WithdrawalsModule
      //     ),
      //   canActivate: [AuthGuardService],
      // },
      {
        path: "movies",
        loadChildren: () =>
          import("./pages/movies/movies.module").then((m) => m.MoviesModule),
        canActivate: [AuthGuardService],
      },
      {
        path: "tickets",
        loadChildren: () =>
          import("./pages/tickets/tickets.module").then((m) => m.TicketsModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
