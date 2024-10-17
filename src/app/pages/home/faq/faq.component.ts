import { Component } from "@angular/core";
import { DomManipulationService } from "src/app/services/dom-manipulation.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FAQComponent {
  constructor(private domManipulationService: DomManipulationService) {}

  ngOnInit(): void {
    this.domManipulationService.scrollToTop();
  }
}
