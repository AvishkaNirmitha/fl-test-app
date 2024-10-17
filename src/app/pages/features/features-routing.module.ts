import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesPageViewComponent } from './features-page-view/features-page-view.component';

export const FeaturesPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FeaturesPageViewComponent,
      },
    ],
  },
];
