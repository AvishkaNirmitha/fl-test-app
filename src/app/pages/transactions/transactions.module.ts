import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutes } from './transactions-routing.module';
import { TransactionsViewComponent } from './transactions-view/transactions-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { QRCodeModule } from 'angularx-qrcode';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [TransactionsViewComponent],
  imports: [
    CommonModule,
    QRCodeModule,
    RouterModule.forChild(TransactionsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TablerIconsModule,
    MatCardModule,
    NgApexchartsModule,
    MatTableModule,
  ],
})
export class TransactionsModule {}
