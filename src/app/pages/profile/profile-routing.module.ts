import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';

export const ProfileRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileViewComponent,
      },
    ],
  },
];
