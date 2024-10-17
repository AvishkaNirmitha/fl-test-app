import { Component } from "@angular/core";
import { DomManipulationService } from "src/app/services/dom-manipulation.service";

@Component({
  selector: "app-who-we-are",
  templateUrl: "./who-we-are.component.html",
  styleUrls: ["./who-we-are.component.scss"],
})
export class WhoWeAreComponent {
  constructor(private domManipulationService: DomManipulationService) {}

  ngOnInit(): void {
    this.domManipulationService.scrollToTop();
  }
}
