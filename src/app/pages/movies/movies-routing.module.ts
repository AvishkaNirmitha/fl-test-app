import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesViewComponent } from "./movies-view/movies-view.component";

export const moviesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: MoviesViewComponent,
      },
    ],
  },
];
