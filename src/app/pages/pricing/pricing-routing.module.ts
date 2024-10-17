import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingPageViewComponent } from './pricing-page-view/pricing-page-view.component';

export const PricingPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PricingPageViewComponent,
      },
    ],
  },
];
