import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ClipboardService } from "src/app/services/clipboard.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { UserService } from "src/app/services/user.service";
import { removeWhiteSpaces } from "src/app/services/validations/validator";

@Component({
  selector: "app-auth-confirm",
  templateUrl: "./auth-confirm.component.html",
  styleUrls: ["./auth-confirm.component.scss"],
})
export class AuthConfirmComponent implements OnInit {
  loading: Boolean = false;
  userId: string = "";
  userEmail: string = "";
  toggle: boolean = false;
  password_eye_icon: boolean = false;
  activeTab: number = 1;
  qrImage: string = "";
  secret: string = "";
  form: FormGroup;
  verificationForm: FormGroup;
  disableForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AuthConfirmComponent>,
    private _FormBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    private userService: UserService,
    private msgHandleService: MsgHandelService,
    private clipboardService: ClipboardService
  ) {
    this.form = this._FormBuilder.group({
      code: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      ],
    });

    this.verificationForm = this._FormBuilder.group({
      code: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      ],
    });

    this.disableForm = this._FormBuilder.group({
      code: [
        null,
        Validators.compose([
          removeWhiteSpaces,
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      ],
    });

    this.userId = this.parentData.userId;
    this.userEmail = this.parentData.userEmail;
    this.toggle = this.parentData.toggle;
  }

  ngOnInit(): void {
    console.log("model parent data", this.parentData);
  }

  close(status: boolean) {
    this.dialogRef.close(status);
  }

  sendRequest() {
    if (!this.toggle) return;
    this.loading = true;
    this.userService.requestTwoFactorAuth().subscribe(
      (data) => {
        if (data.status && data.data) {
          this.msgHandleService.showSuccessMsg(
            "",
            "Verification code sent to email"
          );
          this.activeTab = 2;
        }
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.msgHandleService.showErrorMsg("", error.msg || error);
      }
    );
  }

  enableTwoFactorAuth() {
    if (!this.toggle) return;
    const verificationCode = this.form.get("code")?.value;
    if (this.form.invalid || !verificationCode) return;
    this.loading = true;
    this.userService.enableTwoFactorAuth(verificationCode).subscribe(
      (data) => {
        if (data.status && data.data) {
          if (this.toggle) {
            this.qrImage = data.data.qrImage;
            this.secret = data.data.secret;
            this.activeTab = 3;
          }
        }
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.msgHandleService.showErrorMsg("", error.msg || error);
      }
    );
  }

  verifyTwoFactorAuth() {
    if (!this.toggle) return;
    const verificationCode = this.verificationForm.get("code")?.value;
    if (this.verificationForm.invalid || !verificationCode) return;
    this.loading = true;
    this.userService
      .verifyTwoFactorAuth(this.userId, verificationCode)
      .subscribe(
        (data) => {
          if (data.status && data.data) {
            if (this.toggle) {
              this.msgHandleService.showSuccessMsg(
                "",
                "Two Factor Auth Enabled Successfully"
              );
              this.close(true);
            }
          }
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this.msgHandleService.showErrorMsg("", error.msg || error);
        }
      );
  }

  public copyToClipboard = (data: any) => {
    this.clipboardService.copyToClipboard(data);

    this.msgHandleService.showSuccessMsg("", "Secret copied to clipboard");
  };

  disableTwoFactorAuth() {
    const verificationCode = this.disableForm.get("code")?.value;
    if (this.disableForm.invalid || !verificationCode) return;
    this.loading = true;
    this.userService.disableTwoFactorAuth(verificationCode).subscribe(
      (data) => {
        if (data.status && data.data) {
          if (!this.toggle) {
            this.msgHandleService.showSuccessMsg(
              "",
              "Two Factor Auth Disabled Successfully"
            );
            this.close(true);
          }
        }
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.msgHandleService.showErrorMsg("", error.msg || error);
      }
    );
  }
}
