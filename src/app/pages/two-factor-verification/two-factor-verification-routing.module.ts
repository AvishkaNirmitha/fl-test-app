import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoFactorVerificationViewComponent } from './two-factor-verification-view/two-factor-verification-view.component';

export const VerificationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TwoFactorVerificationViewComponent,
      },
    ],
  },
];
