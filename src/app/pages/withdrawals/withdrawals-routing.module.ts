import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WithdrawalViewComponent } from "./withdrawal-view/withdrawal-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: WithdrawalViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawalsRoutingModule {}
