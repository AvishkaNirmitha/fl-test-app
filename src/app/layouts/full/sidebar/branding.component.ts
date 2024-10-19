import { Component } from "@angular/core";

@Component({
  selector: "app-branding",
  template: `
    <div class="branding d-flex justify-content-center">
      <a href="/">
        <img
          src="./assets/images/site/main-logo-transparent-bg.png"
          class="align-middle m-2"
          alt="logo"
          style="max-width: 9em;"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
