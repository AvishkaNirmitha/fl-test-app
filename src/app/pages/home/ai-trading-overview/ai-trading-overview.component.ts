import { Component } from "@angular/core";
import { DomManipulationService } from "src/app/services/dom-manipulation.service";

@Component({
  selector: "app-ai-trading-overview",
  templateUrl: "./ai-trading-overview.component.html",
  styleUrls: ["./ai-trading-overview.component.scss"],
})
export class AiTradingOverviewComponent {
  constructor(private domManipulationService: DomManipulationService) {}

  ngOnInit(): void {
    this.domManipulationService.scrollToTop();
  }
}
