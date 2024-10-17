import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/site/main-logo-transparent-bg.png"
          class="align-middle m-2"
          alt="logo"
          style="max-width: 15em;"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
