import { Component } from "@angular/core";
import { AuthConfirmComponent } from "../auth-confirm/auth-confirm.component";
import { MatDialog } from "@angular/material/dialog";
import { GlobalService } from "src/app/services/global.service";
import { Subscription } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  DOBValidator,
  pureEmail,
  removeWhiteSpaces,
} from "src/app/services/validations/validator";
import { UserService } from "src/app/services/user.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { FileService } from "src/app/services/file.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.scss"],
})
export class ProfileViewComponent {
  loading: boolean = false;
  userDetails: any = {};

  loggedUserSubscription: Subscription;

  two_factor_auth_enabled: Boolean = true;

  rForm: FormGroup;

  imageLoadPath = environment.image_load_url;

  frontNIC: any = null; // based64 read image url
  selectedFrontNIC: any = null; // image file holder for uploading
  uploadedFrontNIC: any;

  backNIC: any = null; // based64 read image url
  selectedBackNIC: any = null; // image file holder for uploading
  uploadedBackNIC: any;

  photoTypes = [
    {
      name: "Photo ID",
      isChecked: true,
      value: "Photo ID",
    },
    {
      name: "License",
      isChecked: false,
      value: "License",
    },
    {
      name: "Passport",
      isChecked: false,
      value: "Passport",
    },
  ];

  selectedPhotoType = this.photoTypes[0];
  private userDataTimeout: any;

  constructor(
    public dialog: MatDialog,
    public globalService: GlobalService,
    private _FormBuilder: FormBuilder,
    private userService: UserService,
    private _MsgHandelService: MsgHandelService,
    private fileService: FileService
  ) {}

  toggle2FA() {
    this.two_factor_auth_enabled = !this.two_factor_auth_enabled;
    const dialogRef = this.dialog.open(AuthConfirmComponent, {
      width: "45vw",
      maxHeight: "85vh",
      autoFocus: false,
      disableClose: true,
      data: {
        userId: this.userDetails["_id"],
        userEmail: this.userDetails["email"],
        toggle: this.two_factor_auth_enabled,
      },
      panelClass: "confirmation-dialog",
    });
    dialogRef.afterClosed().subscribe((result) => {
      // close selected trade
      if (!result) {
        this.two_factor_auth_enabled = !this.two_factor_auth_enabled;
      }

      this.globalService.setLoggedUserObj({
        ...this.userDetails,
        two_factor_auth_enabled: this.two_factor_auth_enabled ? true : false,
      });
    });
  }

  ngOnInit() {
    this.rForm = this._FormBuilder.group({
      first_name: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ]),
      ],
      surname: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ]),
      ],
      date_of_birth: [
        "",
        Validators.compose([Validators.required, DOBValidator]),
      ],
      photo_id_number: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(60),
        ]),
      ],
      mobile_number: [
        null,
        Validators.compose([
          // removeWhiteSpaces,
          Validators.required,
        ]),
      ],
      address: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.maxLength(50),
        ]),
      ],
      country: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.maxLength(15),
        ]),
      ],
      city: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.maxLength(15),
        ]),
      ],
      state_province: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.maxLength(15),
        ]),
      ],
      zip_postal_code: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(7)]),
      ],
      // nic_photo_front_side: ["", []],
      // nic_photo_back_side: ["", []],
    });

    this.loggedUserSubscription = this.globalService
      .getLoggedUserObj()
      .subscribe((value: any) => {
        if (value) {
          this.userDetails = value;

          this.two_factor_auth_enabled = this.userDetails[
            "two_factor_auth_enabled"
          ]
            ? true
            : false;

          this.patchFormValue();
        }
      });
  }

  ngOnDestroy(): void {
    this.loggedUserSubscription?.unsubscribe();
    clearTimeout(this.userDataTimeout);
  }

  radioChange(event: any) {
    this.photoTypes.forEach((item) => (item.isChecked = false));
    for (let i = 0; i < this.photoTypes.length; i++) {
      if (this.photoTypes[i].value === event.value) {
        this.photoTypes[i].isChecked = true;
        this.selectedPhotoType = this.photoTypes[i];
        break;
      }
    }
  }

  getSelectedName() {}

  public updateUSerData = () => {
    if (!this.rForm?.valid) return;

    if (this.selectedPhotoType.value != "Passport") {
      if (!this.uploadedFrontNIC || !this.uploadedBackNIC) {
        this._MsgHandelService.showErrorMsg(
          "",
          "NIC front side and back side both are required"
        );

        return;
      }
    } else {
      if (!this.uploadedFrontNIC) {
        this._MsgHandelService.showErrorMsg(
          "",
          "A clear photo of your passport front page is required to proceed"
        );

        return;
      } else {
        this.uploadedBackNIC = this.uploadedBackNIC;
      }
    }

    const userObj = {
      _id: this.userDetails._id,
      first_name: this.rForm.controls["first_name"].value,
      surname: this.rForm.controls["surname"].value,
      // date_of_birth: this.rForm.controls["date_of_birth"].value,
      photo_id_number: this.rForm.controls["photo_id_number"].value,
      photo_id_type: "nic",
      mobile_number: this.rForm.controls["mobile_number"]?.value?.toString(),
      address: this.rForm.controls["address"].value,
      date_of_birth: this.rForm.controls["date_of_birth"].value,
      country: this.rForm.controls["country"].value,
      city: this.rForm.controls["city"].value,
      state_province: this.rForm.controls["state_province"].value,
      zip_postal_code: this.rForm.controls["zip_postal_code"].value,
      nic_photo_front_side: this.uploadedFrontNIC,
      nic_photo_back_side: this.uploadedBackNIC,
      photo_type: this.selectedPhotoType.value,
    };
    this.loading = true;
    this.userService.updateUserData(userObj).subscribe(
      (response) => {
        if (response.status) {
          this.loading = false;

          this._MsgHandelService.showSuccessMsg(
            "",
            "Successfully updated profile information"
          );

          this.globalService.setLoggedUserObj({
            ...this.userDetails,
            ...response.data,
          });
        }
      },
      (error) => {
        this.loading = false;
        // show msg
        this._MsgHandelService.handleError(error);
      }
    );
  };

  patchFormValue() {
    if (!this.rForm) return;

    this.rForm.patchValue({
      first_name: this.userDetails?.["first_name"],
      surname: this.userDetails?.["surname"],
      // date_of_birth: this.userDetails["date_of_birth"],
      photo_id_number: this.userDetails?.["photo_id_number"],
      mobile_number: this.userDetails?.["mobile_number"],
      address: this.userDetails?.["address"],
      date_of_birth: this.userDetails?.["date_of_birth"],
      country: this.userDetails?.["country"],
      city: this.userDetails?.["city"],
      state_province: this.userDetails?.["state_province"],
      zip_postal_code: this.userDetails?.["zip_postal_code"],
    });

    this.radioChange({ value: this.userDetails?.["photo_type"] });

    if (this.userDetails?.["nic_photo_front_side"]) {
      this.frontNIC =
        this.imageLoadPath.size300 + this.userDetails?.["nic_photo_front_side"];

      this.uploadedFrontNIC = this.userDetails?.["nic_photo_front_side"];
    }

    if (this.userDetails?.["nic_photo_back_side"]) {
      this.backNIC =
        this.imageLoadPath.size300 + this.userDetails?.["nic_photo_back_side"];

      this.uploadedBackNIC = this.userDetails?.["nic_photo_back_side"];
    }

    if (this.showWaitingStatus()) {
      this.userDataTimeout = setTimeout(() => {
        this.loadAccountData();
      }, 25000);
    } else {
      if (this.userDataTimeout) {
        clearTimeout(this.userDataTimeout);
      }
    }
  }

  removeImage(index: any, is_front_nic: boolean = true) {
    if (is_front_nic) {
      this.frontNIC = null;
    } else {
      this.backNIC = null;
    }
  }

  async onFileSelected(event: any, front_nic: boolean = true) {
    if (event.target.files.length > 0) {
      let index = 0;

      if (
        event.target.files[index].type == "image/jpeg" ||
        event.target.files[index].type == "image/png" ||
        event.target.files[index].type == "image/jpg"
      ) {
        if (front_nic) {
          this.selectedFrontNIC = event.target.files[index];

          this.frontNIC = await this.fileService.readFileAsDataURL(
            event?.target.files[index]
          );

          // this.uploadImages();
          event.target.value = "";
        } else if (!front_nic) {
          this.selectedBackNIC = event.target.files[index];

          this.backNIC = await this.fileService.readFileAsDataURL(
            event?.target.files[index]
          );
        }
      } else {
        event.target.value = "";
        const msg = "Invalid image file format. please use valid image format";
        // this.notificationService.showErrorMsg("Sorry", msg, 5000);
        this._MsgHandelService.showErrorMsg("", msg);
      }
    }
  }

  async uploadImages() {
    this.loading = true;

    const images = [
      this.selectedFrontNIC ? this.selectedFrontNIC : "",
      this.selectedBackNIC ? this.selectedBackNIC : "",
    ];

    if (!images[0] && !images[1]) {
      this.updateUSerData();
      return;
    }

    // Loop through each image with index
    for (let index = 0; index < images.length; index++) {
      const image = images[index];

      // If the image is falsy (e.g., undefined or null), skip it
      if (!image) continue;

      // Create a new FormData instance and append the image
      const formData = new FormData();
      formData.append("files", image);

      // Use a try-catch block to handle asynchronous operations and errors
      try {
        // Perform file upload using the file service
        const event = await this.fileService.fileUpload(formData).toPromise();

        // Handle the result of the file upload
        if (event.status) {
          // If NIC front side (index = 0)
          if (index === 0) {
            this.uploadedFrontNIC = `${event.data[0]}`;

            if (!images[1]) {
              // Call a function to update user data if there is no back NIC image
              this.updateUSerData();
            }
          }
          // If NIC back side (index = 1)
          else if (index === 1) {
            this.uploadedBackNIC = `${event.data[0]}`;
            if (images[1]) {
              // Call a function to update user data if there is a back NIC image
              this.updateUSerData();
            }
          }
        } else {
          // Handle the case where the file upload was not successful
          this.loading = false;
          this._MsgHandelService.showErrorMsg(
            "",
            "Something went wrong. Please try again"
          );
        }
      } catch (error: any) {
        // Handle any errors that occur during the asynchronous operation
        this._MsgHandelService.showErrorMsg("Sorry", error?.msg);
        this.loading = false;
      }
    }
  }

  requestKYC() {
    this.loading = true;
    this.userService
      .updateUserData({
        _id: this.userService.getCurrentUserId(),
        kyc_approval_status: "pending",
      })
      .subscribe(
        (response) => {
          if (response.status) {
            this.loading = false;

            this._MsgHandelService.showSuccessMsg(
              "",
              "Successfully Requested KYC Approval "
            );

            this.globalService.setLoggedUserObj({
              ...this.userDetails,
              ...response.data,
            });
          }
        },
        (error) => {
          this.loading = false;
          // show msg
          this._MsgHandelService.handleError(error);
        }
      );
  }

  validateKycBtn() {
    if (
      (this.userDetails?.kyc_approval_status == "not-confirmed" ||
        this.userDetails?.kyc_approval_status == "rejected") &&
      this.userDetails?.is_kyc_approved == false &&
      this.rForm?.valid &&
      this.userDetails?.["nic_photo_front_side"] &&
      this.userDetails?.["nic_photo_back_side"]
    ) {
      return true;
    }
    return false;
  }

  showWaitingStatus() {
    if (
      this.userDetails?.kyc_approval_status == "pending" &&
      this.userDetails?.is_kyc_approved == false
    ) {
      return true;
    }

    return false;
  }

  showRejectedReason() {
    if (
      this.userDetails?.kyc_approval_status == "rejected" &&
      this.userDetails?.kyc_rejected_reason != "" &&
      this.userDetails?.kyc_rejected_reason != undefined &&
      this.userDetails?.kyc_rejected_reason != null
    ) {
      return true;
    }
    return false;
  }

  showSaveBtn() {
    return (
      this.userDetails?.kyc_approval_status != "approved" &&
      !this.userDetails?.is_kyc_approved
    );
  }

  loadAccountData() {
    this.userService.getUserById(this.userService.getCurrentUserId()).subscribe(
      (response) => {
        this.globalService.setLoggedUserObj(response.data);
      },
      (error) => {
        this._MsgHandelService.showErrorMsg("", error?.msg);
      }
    );
  }
}
