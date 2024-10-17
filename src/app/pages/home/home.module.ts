import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { HomePageRoutes } from './home-routing.module';
import { HomePageViewComponent } from './home-page-view/home-page-view.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { PublicNavComponent } from './public-nav/public-nav.component';
import { AiTradingOverviewComponent } from './ai-trading-overview/ai-trading-overview.component';
import { FAQComponent } from './faq/faq.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomePageRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [HomePageViewComponent, WhoWeAreComponent, PublicNavComponent, AiTradingOverviewComponent, FAQComponent, PublicFooterComponent],
})
export class HomePageModule {}
