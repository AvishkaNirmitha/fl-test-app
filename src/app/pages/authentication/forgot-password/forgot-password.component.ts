import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { AuthService } from "src/app/services/authentication.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { UserService } from "src/app/services/user.service";
import {
  removeWhiteSpaces,
  pureEmail,
  strongPasswordValidation,
  confPassValidation,
} from "src/app/services/validations/validator";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent {
  // form values
  passwordResetForm: FormGroup;
  ResetCodeForm: FormGroup;
  loading: boolean = false;
  password_eye_icon: boolean = false;
  activeTabConfig: any = {
    codeRequestView: 1,
    passwordRestView: 2,
  };
  activeTab: number = this.activeTabConfig["codeRequestView"];
  confirm_password_eye_icon = false;

  constructor(
    private _Router: Router,
    private _JwtService: JwtService,
    private _FormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _AuthService: AuthService,
    private _MsgHandelService: MsgHandelService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private userService: UserService
  ) {
    // form data
    this.passwordResetForm = this._FormBuilder.group(
      {
        password: [
          "",
          [Validators.required, Validators.pattern(strongPasswordValidation)],
        ],
        confirmPassword: [null, [Validators.required]],
        password_reset_code: [
          null,
          Validators.compose([removeWhiteSpaces, Validators.required]),
        ],
      },
      {
        validator: confPassValidation,
      }
    );

    this.ResetCodeForm = this._FormBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(pureEmail),
        ]),
      ],
    });
  }

  ngOnInit() {}

  public resetUserPassword = () => {
    if (!this.passwordResetForm.valid) {
      return;
    }

    // stop loading
    this.loading = true;
    this._AuthService
      .resetPassword({
        email: this.ResetCodeForm.controls["email"].value,
        password: this.passwordResetForm.controls["password"].value,
        password_reset_code:
          this.passwordResetForm.controls["password_reset_code"].value,
      })
      .subscribe(
        (data) => {
          this.loading = false;
          if (data.status) {
            this._MsgHandelService.showSuccessMsg(
              "",
              "Successfully reset your password"
            );

            this._Router.navigateByUrl("/authentication/login");
          }
        },
        (error) => {
          // stop loading
          this.loading = false;
          // show msg
          this._MsgHandelService.handleError(error);
        }
      );
  };

  /**
   * request reset code
   * @returns
   */
  public requestResetCode = () => {
    if (!this.ResetCodeForm.valid) {
      return;
    }

    // stop loading
    this.loading = true;
    this._AuthService
      .sendResetEmail({
        email: this.ResetCodeForm.controls["email"].value,
      })
      .subscribe(
        (data) => {
          this.loading = false;
          if (data.status) {
            this.activeTab = this.activeTabConfig["passwordRestView"];
          }
        },
        (error) => {
          // stop loading
          this.loading = false;
          // show msg
          this._MsgHandelService.handleError(error);
        }
      );
  };

  ngOnDestroy(): void {}

  isLowerCaseValid(): boolean {
    const password = this.passwordResetForm?.get("password")?.value;
    return /[a-z]/.test(password);
  }

  isUpperCaseValid(): boolean {
    const password = this.passwordResetForm.get("password")?.value;
    return /[A-Z]/.test(password);
  }

  isNumberValid(): boolean {
    const password = this.passwordResetForm.get("password")?.value;
    return /\d/.test(password);
  }

  isLengthValid(): boolean {
    const password = this.passwordResetForm.get("password")?.value;
    return password?.length >= 8;
  }
}
