import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketsRoutingModule } from "./tickets-routing.module";
import { TicketsViewComponent } from "./tickets-view/tickets-view.component";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [TicketsViewComponent],
  imports: [CommonModule, TicketsRoutingModule, MatCardModule, SharedModule],
})
export class TicketsModule {}
