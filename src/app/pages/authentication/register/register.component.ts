import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { AuthService } from "src/app/services/authentication.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { UserService } from "src/app/services/user.service";
import {
  confPassValidation,
  pureEmail,
  removeWhiteSpaces,
  strongPasswordValidation,
} from "src/app/services/validations/validator";
import {
  USER_ROUTE,
  USER_IP,
  USER_PROTOCOL,
  USER_PORT,
} from "src/assets/configs/localstorage.config";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class AppSideRegisterComponent {
  // form values
  rForm: FormGroup;
  authCodeForm: FormGroup;
  loading: boolean = false;
  password_eye_icon: boolean = false;
  activeTab: number = 1;
  authCodeFocus: boolean = false;
  loggedResponse: any = null;
  confirm_password_eye_icon = false;
  verification_code_sent: boolean = false;
  verfication_code_verified: boolean = false;
  routeSub: Subscription;

  searchTimeout: any;

  countdownInterval: any;

  timerEnd: boolean = false;

  targetTime: number = 60; // The target time in seconds
  currentTime: number = this.targetTime;

  ref_id: string = "";

  constructor(
    private _Router: Router,
    private _JwtService: JwtService,
    private _FormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _AuthService: AuthService,
    private _MsgHandelService: MsgHandelService,
    // private _DomManipulationService: DomManipulationService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private userService: UserService
  ) {
    // form data
    this.rForm = this._FormBuilder.group(
      {
        name: [
          null,
          Validators.compose([removeWhiteSpaces, Validators.required]),
        ],
        email: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(pureEmail),
          ]),
        ],
        password: [
          "",
          [Validators.required, Validators.pattern(strongPasswordValidation)],
        ],
        confirmPassword: [null, [Validators.required]],
        email_verification_code: [
          null,
          Validators.compose([removeWhiteSpaces, Validators.required]),
        ],
      },
      {
        validator: confPassValidation,
      }
    );

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
    // if (this._JwtService.getToken()) {
    //   // this._Router.navigateByUrl("/initial");
    //   // this._NavBarService.setRedirectDashboardStatus({
    //   //   status: true,
    //   //   data: {},
    //   // });
    // }

    this.routeSub = this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.ref_id = params["id"];
      }
    });
  }

  get authCode(): AbstractControl {
    return <AbstractControl>this.authCodeForm.get("authCode");
  }

  public registerUser = () => {
    if (!this.verfication_code_verified) {
      this._MsgHandelService.showErrorMsg(
        "",
        "please veriy email before sign up"
      );
      return;
    }

    // create user object
    const userObj: any = {
      name: this.rForm.controls["name"].value,
      email: this.rForm.controls["email"].value,
      password: this.rForm.controls["password"].value,
      code: this.rForm.controls["email_verification_code"].value,
    };

    const loginObj = {
      email: this.rForm.controls["email"].value,
      password: this.rForm.controls["password"].value,
    };

    if (this.ref_id) {
      userObj["affiliate_id"] = this.ref_id;
    }

    // if (this.pageQueryDetails['type']) {
    //   userObj['type'] = this.pageQueryDetails['type'];
    // }

    // stop loading
    this.loading = true;
    this._AuthService.registerUser(userObj).subscribe(
      (data) => {
        this._AuthService.loginUser(loginObj).subscribe(
          (response) => {
            this.loading = false;

            // store token
            this._JwtService.saveToken(response.token);

            this._LocalStorageHandleService.saveItem({
              name: "user_id",
              value: response["data"]["_id"],
            });

            this._LocalStorageHandleService.saveItem({
              name: "referral_code",
              value: response["data"]["referral_code"],
            });

            this._MsgHandelService.showSuccessMsg("", "Successfully log in");

            // load the home page
            this._Router.navigateByUrl("/dashboard");
          },
          (error) => {
            // stop loading
            this.loading = false;

            // show msg
            this._MsgHandelService.handleError(error);
          }
        );
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
   *send auth code
   */
  public sendAuthCode = () => {
    // console.log('timer');

    if (this.ref_id) {
      if (
        !this.rForm.controls["email"].valid ||
        !this.rForm.controls["name"].valid
      )
        return;

      // stop loading
      this.loading = true;

      this._AuthService
        .sendAuthCode({
          email: this.rForm.controls["email"].value,
          display_name: this.rForm.controls["name"].value,
        })
        .subscribe(
          (data) => {
            if (data.status) {
              this._MsgHandelService.showSuccessMsg(
                "",
                "Successfully sent verification code"
              );

              this.verification_code_sent = true;

              this.startCountdown();

              // this.timerEnd = false;

              this.loading = false;
            }
          },
          (error) => {
            // stop loading

            this.loading = false;
            // show msg
            this._MsgHandelService.handleError(error);
          }
        );
    } else {
      this._MsgHandelService.showErrorMsg(
        "Error",
        "You are not permitted to proceed without a referral code."
      );
    }
  };

  handleVerificationCode() {
    if (
      this.verification_code_sent &&
      this.rForm.controls["email_verification_code"].value.length >= 6
    ) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.verifyAuthCode();
      }, 500);
    }
  }

  public verifyAuthCode = () => {
    // stop loading
    this.loading = true;
    this._AuthService
      .verifyAuthCode({
        email: this.rForm.controls["email"].value,
        code: this.rForm.controls["email_verification_code"].value,
      })
      .subscribe(
        (data) => {
          this.loading = false;
          if (data?.data?.isVerified) {
            this._MsgHandelService.showSuccessMsg(
              "",
              "Successfully verified verification code"
            );

            this.verfication_code_verified = true;
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

  startCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);

      this.countdownInterval = undefined;
    }

    this.currentTime = this.targetTime;

    this.verfication_code_verified = false;

    this.timerEnd = false;

    // console.log('count down instance ', this.countdownInterval);

    this.countdownInterval = setInterval(() => {
      // console.log('--time before ', this.currentTime);
      if (this.currentTime > 0) {
        // console.log('--time before ', this.currentTime);
        this.currentTime--;

        // console.log('--time after', this.currentTime);
      } else {
        clearInterval(this.countdownInterval);

        this.timerEnd = true;

        // Countdown has finished, you can perform actions here
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.routeSub?.unsubscribe();
  }

  isLowerCaseValid(): boolean {
    const password = this.rForm?.get("password")?.value;
    return /[a-z]/.test(password);
  }

  isUpperCaseValid(): boolean {
    const password = this.rForm.get("password")?.value;
    return /[A-Z]/.test(password);
  }

  isNumberValid(): boolean {
    const password = this.rForm.get("password")?.value;
    return /\d/.test(password);
  }

  isLengthValid(): boolean {
    const password = this.rForm.get("password")?.value;
    return password?.length >= 8;
  }
}
