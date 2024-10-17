import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesPageViewComponent } from './features-page-view/features-page-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
// import { FeaturesPageRoutes } from './features-routing.module';
import { FeaturesPageRoutes } from './features-routing.module';

@NgModule({
  declarations: [FeaturesPageViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FeaturesPageRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
})
export class FeaturesModule implements OnInit {
  constructor() {}

  ngOnInit() {
    // location.reload();
  }
}
