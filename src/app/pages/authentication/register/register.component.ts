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
          [Validators.compose([Validators.required, Validators.minLength(8)])],
        ],
        confirmPassword: [null, [Validators.required]],
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

  ngOnInit() {}

  get authCode(): AbstractControl {
    return <AbstractControl>this.authCodeForm.get("authCode");
  }

  public registerUser = () => {
    // create user object
    const userObj: any = {
      name: this.rForm.controls["name"].value,
      email: this.rForm.controls["email"].value,
      password: this.rForm.controls["password"].value,
    };

    const loginObj = {
      email: this.rForm.controls["email"].value,
      password: this.rForm.controls["password"].value,
    };

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

  ngOnDestroy(): void {}
}
