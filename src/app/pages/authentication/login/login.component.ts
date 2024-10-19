import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { JwtService } from "src/app/infrastructure/jwt.service";
import { LocalStorageHandleService } from "src/app/services/local-storage-handle.service";
import { MsgHandelService } from "src/app/services/msg-handel.service";

import { pureEmail } from "../../../services/validations/validator";
import { FirebaseService } from "src/app/services/firebase.service";

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
  authCodeFocus: boolean = false;
  loggedResponse: any = null;

  constructor(
    private _Router: Router,
    private _JwtService: JwtService,
    private _FormBuilder: FormBuilder,
    private _MsgHandelService: MsgHandelService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private firebaseService: FirebaseService
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
  }

  ngOnInit() {}

  get authCode(): AbstractControl {
    return <AbstractControl>this.authCodeForm.get("authCode");
  }

  public loginUser = () => {
    const userObj = {
      email: this.rForm.controls["email"].value,
      password: this.rForm.controls["password"].value,
    };
    this.loading = true;

    this.firebaseService
      .login(userObj?.email, userObj?.password)
      .then((response) => {
        console.log("Login successful!", response);

        response.user.getIdToken().then((idToken) => {
          // store token
          this._JwtService.saveToken(idToken);

          this._LocalStorageHandleService.saveItem({
            name: "user_id",
            value: response.user.uid,
          });

          this._Router.navigateByUrl("/movies");
        });
      })
      .catch((error) => {
        this.loading = false;

        console.log("Login error:", error?.message);

        this._MsgHandelService.handleFirebaseError(error);
      });
  };

  public loginWithGoogle() {
    this.loading = true;

    this.firebaseService
      .loginWithGoogle()
      .then((response) => {
        console.log("Login successful!", response);

        response.user.getIdToken().then((idToken) => {
          // store token
          this._JwtService.saveToken(idToken);

          this._LocalStorageHandleService.saveItem({
            name: "user_id",
            value: response.user.uid,
          });

          this._Router.navigateByUrl("/movies");
        });
      })
      .catch((error) => {
        this.loading = false;

        console.log("Login error:", error?.message);

        this._MsgHandelService.handleFirebaseError(error);
      });
  }
}
