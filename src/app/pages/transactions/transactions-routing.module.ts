import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsViewComponent } from './transactions-view/transactions-view.component';

export const TransactionsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TransactionsViewComponent,
      },
    ],
  },
];
