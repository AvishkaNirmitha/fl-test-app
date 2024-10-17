import { Routes } from "@angular/router";
import { HomePageViewComponent } from "./home-page-view/home-page-view.component";
import { WhoWeAreComponent } from "./who-we-are/who-we-are.component";
import { AiTradingOverviewComponent } from "./ai-trading-overview/ai-trading-overview.component";
import { FAQComponent } from "./faq/faq.component";

export const HomePageRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomePageViewComponent,
      },
      {
        path: "who-we-are",
        component: WhoWeAreComponent,
      },
      {
        path: "digital-ownership",
        component: AiTradingOverviewComponent,
      },
      {
        path: "faq",
        component: FAQComponent,
      },
    ],
  },
];
