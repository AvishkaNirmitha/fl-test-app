import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningsViewComponent } from './earnings-view/earnings-view.component';

export const EarningsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EarningsViewComponent,
      },
    ],
  },
];
