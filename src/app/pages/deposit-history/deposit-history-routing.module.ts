import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepositHistoryViewComponent } from "./deposit-history-view/deposit-history-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DepositHistoryViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositHistoryRoutingModule {}
