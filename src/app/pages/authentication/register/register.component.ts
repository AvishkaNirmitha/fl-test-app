import { Component } from "@angular/core";
import { FirebaseServerApp } from "@angular/fire/app";
import {
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import {
  confPassValidation,
  pureEmail,
  removeWhiteSpaces,
} from "src/app/services/validations/validator";

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
    private _MsgHandelService: MsgHandelService,
    private firebaseService: FirebaseService,
    // private _DomManipulationService: DomManipulationService,
    private _LocalStorageHandleService: LocalStorageHandleService
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
    const userobj = {
      email: this.rForm.controls["email"].value,
      password: this.rForm.controls["password"].value,
    };

    this.loading = true;
    this.firebaseService
      .register(userobj["email"], userobj["password"])
      .then((response) => {
        response.user.getIdToken().then((idToken) => {
          console.log("Registration successful!", idToken);

          // store token
          this._JwtService.saveToken(idToken);

          this._LocalStorageHandleService.saveItem({
            name: "user_id",
            value: response.user.uid,
          });

          this._MsgHandelService.showSuccessMsg("", "Successfully log in");

          this.loading = false;

          // load the home page
          this._Router.navigateByUrl("/dashboard");
        });
      })
      .catch((error) => {
        console.log("error-----", error);

        // stop loading
        this.loading = false;

        // show msg
        this._MsgHandelService.handleError(error);

        console.error("Registration error:", error);
      });

    // stop loading
  };

  ngOnDestroy(): void {}
}
