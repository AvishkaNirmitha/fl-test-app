import { Component, OnInit } from '@angular/core';
import { DomManipulationService } from 'src/app/services/dom-manipulation.service';

@Component({
  selector: 'app-home-page-view',
  templateUrl: './home-page-view.component.html',
  styleUrls: ['./home-page-view.component.scss'],
})
export class HomePageViewComponent implements OnInit {
  constructor(private domManipulationService: DomManipulationService) {}

  ngOnInit(): void {
    this.domManipulationService.scrollToTop();
  }
}
