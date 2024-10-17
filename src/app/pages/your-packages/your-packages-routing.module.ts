import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchasedPackagesComponent } from "./purchased-packages/purchased-packages.component";
import { DailyRewardsViewComponent } from "./daily-rewards-view/daily-rewards-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PurchasedPackagesComponent,
      },
    ],
  },
  {
    path: "daily-rewards",
    children: [
      {
        path: "",
        component: DailyRewardsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourPackagesRoutingModule {}
