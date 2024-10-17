import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { AuthService } from "src/app/services/authentication.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import {
  USER_ROUTE,
  USER_IP,
  USER_PORT,
  USER_PROTOCOL,
} from "src/assets/configs/localstorage.config";

import { pureEmail } from "../../../services/validations/validator";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class AppSideLoginComponent {
  // form values
  rForm: FormGroup;
  authCodeForm: FormGroup;
  loading: boolean = false;
  password_eye_icon: boolean = false;
  activeTab: number = 1;
  authCodeFocus: boolean = false;
  loggedResponse: any = null;

  constructor(
    private _Router: Router,
    private _JwtService: JwtService,
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _MsgHandelService: MsgHandelService,
    // private _DomManipulationService: DomManipulationService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private userService: UserService
  ) {
    // form data
    this.rForm = this._FormBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(pureEmail),
        ]),
      ],
      password: [null, Validators.compose([Validators.required])],
    });

    this.authCodeForm = this._FormBuilder.group({
      authCode: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern(`^[0-9]{6,6}$`),
        ],
      ],
    });
  }

  ngOnInit() {
    //sign up page scroll to top
    // this._DomManipulationService.scrollToTop();

    /**
     * redirect to dashboard if the user is already logged in
     */
    if (this._JwtService.getToken()) {
      // this._Router.navigateByUrl("/initial");
      // this._NavBarService.setRedirectDashboardStatus({
      //   status: true,
      //   data: {},
      // });
    }
  }

  get authCode(): AbstractControl {
    return <AbstractControl>this.authCodeForm.get("authCode");
  }

  public loginUser = () => {
    const userObj = {
      email: this.rForm.controls["email"].value,
      password: this.rForm.controls["password"].value,
      // user_type: this._AuthService.generateUserTypeFromDomain(),
      // user_type: "pro",
    };
    // this._MsgHandelService.showErrorMsg('',"dsasdas dsadasd");
    this.loading = true;
    this._AuthService.loginUser(userObj).subscribe(
      (response) => {
        if (response.status) {
          if (!response?.data?.two_factor_auth_enabled) {
            this.loginFromResponse(response);
          } else {
            this.activeTab = 2;
            this.loggedResponse = response;
          }
        }
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        // show msg
        this._MsgHandelService.handleError(error);
      }
    );
  };

  verifyCode() {
    const code = this.authCodeForm.get("authCode")?.value;
    if (!code || !this.loggedResponse?.data?._id || !this.loggedResponse?.token)
      return;

    this.loading = true;
    this.userService
      .verifyTwoFactorAuth(
        this.loggedResponse?.data?._id,
        code.toString(),
        this.loggedResponse?.token
      )
      .subscribe(
        (data) => {
          if (data.status && data.data) {
            this.loginFromResponse(this.loggedResponse);
          }
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this._MsgHandelService.showErrorMsg("", error?.msg);
        }
      );
  }

  loginFromResponse(response: any) {
    // store token
    this._JwtService.saveToken(response?.token);

    this._LocalStorageHandleService.saveItem({
      name: "referral_code",
      value: response["data"]["referral_code"],
    });

    this._LocalStorageHandleService.saveItem({
      name: "user_id",
      value: response["data"]["_id"],
    });

    this._MsgHandelService.showSuccessMsg("", "Successfully signed in");
    // load the home
    this._Router.navigateByUrl("/dashboard");

    // this._NavBarService.setRedirectDashboardStatus({
    //   status: true,
    //   data: {},
    // });
  }
}
