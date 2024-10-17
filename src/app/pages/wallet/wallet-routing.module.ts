import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletViewComponent } from './wallet-view/wallet-view.component';

export const WalletRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WalletViewComponent,
      },
    ],
  },
];
