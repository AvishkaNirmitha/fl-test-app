import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestmentViewComponent } from "./investment-view/investment-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: InvestmentViewComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentRoutingModule {}
