import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReferralsViewComponent } from "./referrals-view/referrals-view.component";
import { ReferralsEarningsComponent } from "./referrals-earnings/referrals-earnings.component";

// export const ReferralsRoutes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: '',
//         component: ReferralsViewComponent,
//       },
//     ],
//   },
// ];

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ReferralsViewComponent,
      },
    ],
  },
  {
    path: "earnings",
    children: [
      {
        path: "",
        component: ReferralsEarningsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralsRoutesRoutingModule {}
