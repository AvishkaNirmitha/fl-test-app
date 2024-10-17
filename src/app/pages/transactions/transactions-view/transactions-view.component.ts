import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  hourRate: number;
  classes: number;
  priority: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Mark J. Freeman',
    position: 'English',
    hourRate: 150,
    classes: 53,
    priority: 'Available',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    hourRate: 150,
    classes: 68,
    priority: 'In Class',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    hourRate: 150,
    classes: 94,
    priority: 'Absent',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    hourRate: 150,
    classes: 27,
    priority: 'On Leave',
  },
];
@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.scss'],
})
export class TransactionsViewComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  fromDate: Date = new Date();
  toDate: Date = new Date();
  selectedType: string = '';
  types: string[] = ['Type1', 'Type2', 'Type3'];

  displayedColumns: string[] = ['profile', 'hrate', 'exclasses', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  applyFilter() {}

  resetFilters() {}
}
