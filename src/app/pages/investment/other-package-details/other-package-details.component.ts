import { Component, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-other-package-details",
  templateUrl: "./other-package-details.component.html",
  styleUrls: ["./other-package-details.component.scss"],
})
export class OtherPackageDetailsComponent {
  constructor(
    private dialogRef: MatDialogRef<OtherPackageDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    public dialog: MatDialog
  ) {}

  public closeModel() {
    // const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    //   width: "30vw",
    //   data: {
    //     title: "Please Confirm",
    //     msg: "Do you want to discard changes?",
    //   },
    //   panelClass: "confirmation-dialog",
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result != undefined) {
    //     if (result.status) {
    //       this.dialogRef.close({
    //         status: false,
    //       });
    //     }
    //   }
    // });

    this.dialogRef.close({
      status: false,
    });
  }
}
