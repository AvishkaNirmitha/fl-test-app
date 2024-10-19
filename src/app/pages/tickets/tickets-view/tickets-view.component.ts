import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TABLE_CONFIG } from "src/app/config/tableConfig";
import { GlobalService } from "src/app/services/global.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { TicketService } from "src/app/services/ticket.service";

@Component({
  selector: "app-tickets-view",
  templateUrl: "./tickets-view.component.html",
  styleUrls: ["./tickets-view.component.scss"],
})
export class TicketsViewComponent {
  private isFirstTime: boolean = true; // check if data loading first time. Otherwise don't need to display page loader

  perPage: number = TABLE_CONFIG.PER_PAGE; // how many record per page
  pageNo: number = TABLE_CONFIG.PAGE_NO; // current navigating page

  isSearchActivated = false;

  loading: boolean = false;

  dataList: any = [];

  totalItems: number = 0; // total numbers of records from API

  queryForm: FormGroup;

  constructor(
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private globalService: GlobalService,
    private formBuilder: FormBuilder,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      query: ["", [Validators.required]],
    });

    this.getAll();
  }

  onPageChanged(event: any) {
    this.pageNo = event;
    console.log("this.pageNo", this.pageNo);
    this.getAll();
  }

  getAll() {
    if (this.isFirstTime) {
      this.loading = true;
      this.isFirstTime = false;
    }

    this.ticketService.getUserTickets().subscribe(
      (tickets) => {
        this.loading = false;
        this.totalItems = tickets?.length;
        this.dataList = tickets;
        console.log("Tickets retrieved:", tickets);
      },
      (error) => {
        this.loading = true;
        console.error("Error retrieving tickets:", error);
      }
    );
  }

  search() {
    this.isSearchActivated = true;
    this.pageNo = 1;
    this.isFirstTime = true;
    this.getAll();
  }

  reset() {
    this.isSearchActivated = false;
    this.pageNo = 1;
    this.isFirstTime = true;
    this.queryForm.reset();
    // this.getAll();
  }
}
