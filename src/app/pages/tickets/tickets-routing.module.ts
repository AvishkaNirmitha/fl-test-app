import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketsViewComponent } from "./tickets-view/tickets-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: TicketsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
