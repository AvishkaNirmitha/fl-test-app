import { Component } from "@angular/core";
import { MovieBookingModelComponent } from "../movie-booking-model/movie-booking-model.component";
import { MatDialog } from "@angular/material/dialog";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { TicketService } from "src/app/services/ticket.service";
import { Router } from "@angular/router";
import { MainService } from "src/app/infrastructure/api.service";
import { DatConfig } from "src/app/config/testDataConfig";

@Component({
  selector: "app-movies-view",
  templateUrl: "./movies-view.component.html",
  styleUrls: ["./movies-view.component.scss"],
})
export class MoviesViewComponent {
  loading: boolean = false;
  loadTestData: boolean = true;
  dataList: any = [];

  constructor(
    public dialog: MatDialog,
    private msgHandelService: MsgHandelService,
    private ticketService: TicketService,
    private router: Router
  ) {}

  formatData(arr: any) {
    return arr
      .map((movie: any) => {
        return {
          name: movie?.originalTitleText?.text,
          image: movie?.primaryImage?.imageUrl,
          ratings: movie?.ratingsSummary?.aggregateRating,
          year: movie?.releaseYear?.year,
        };
      })
      .slice(0, 10);
  }

  ngOnInit(): void {
    if (this.loadTestData) {
      this.dataList = this.formatData(DatConfig);
    } else {
      this.getMoviesData();
    }
  }

  moviewPurchaseModel(item: any) {
    const dialogRef = this.dialog.open(MovieBookingModelComponent, {
      width: "45vw",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        data: item,
      },
      panelClass: "movie-model",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result.status) {
          this.msgHandelService.showSuccessMsg(
            "",
            "Successfully purchased ticket"
          );

          this.router.navigateByUrl("/tickets");
        }
      }
    });
  }

  private getMoviesData() {
    this.loading = true;
    this.ticketService.getMovies().subscribe(
      (response) => {
        this.loading = false;
        if (response?.data?.list) {
          this.dataList = response?.data?.list;
          this.dataList = this.formatData(response?.data?.list);
        }
        console.log("response----", response);
      },
      (error) => {
        this.loading = false;
        this.msgHandelService.handleError(error);
      }
    );
  }
}
