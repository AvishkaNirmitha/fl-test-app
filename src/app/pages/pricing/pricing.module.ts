import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPageRoutes } from './pricing-routing.module';
import { PricingPageViewComponent } from './pricing-page-view/pricing-page-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import * as TablerIcons from 'angular-tabler-icons/icons';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';

@NgModule({
  declarations: [PricingPageViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PricingPageRoutes),
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
export class PricingModule {}
