import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

/**
 * import services
 */
import { MainService } from "../infrastructure/api.service";
import { environment } from "src/environments/environment.prod";
// import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';
// import

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private _MainService: MainService) {}

  /**
   * calling to login endpoint
   * @param user : userObject<email,password>
   */
  loginUser(user: any): Observable<any> {
    console.log("${environment.api_url}", environment.api_url);

    return this._MainService.post("users/login", user, "").pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  /**
   * Register User
   * @param user : userObject
   */
  registerUser(user: any): Observable<any> {
    let route;
    if (user["refCode"]) {
      route = `/users/ref`;
    } else {
      route = `/users`;
    }
    return (
      this._MainService
        // .post(route, user)
        .post(route, user, "")
        .pipe(
          map((data) => {
            return data;
          }),
          catchError((res) => {
            throw res;
          })
        )
    );
  }

  sendAuthCode(data: any): Observable<any> {
    return (
      this._MainService
        // .post(route, user)
        .post("email-verification", data, "")
        .pipe(
          map((data) => {
            return data;
          }),
          catchError((res) => {
            throw res;
          })
        )
    );
  }
  verifyAuthCode(data: any): Observable<any> {
    return (
      this._MainService
        // .post(route, user)
        .post("email-verification/verify-code", data, "")
        .pipe(
          map((data) => {
            return data;
          }),
          catchError((res) => {
            throw res;
          })
        )
    );
  }

  sendResetEmail(user: any): Observable<any> {
    return this._MainService.put("users/password/forgot", user).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  resetPassword(user: any): Observable<any> {
    return this._MainService.put("users/password/forgot/reset", user).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
}
