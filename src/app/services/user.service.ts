import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { MainService } from "../infrastructure/api.service";
import { LocalStorageHandleService } from "../services/local-storage-handle.service";
import { MsgHandelService } from "../services/msg-handel.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private _MainService: MainService,
    private _LocalStorageHandleService: LocalStorageHandleService,
    private _MsgHandelService: MsgHandelService,
    private _router: Router
  ) {}

  getCurrentUserId() {
    return this._LocalStorageHandleService?.getItem("user_id");
  }

  getUserById(id: string): Observable<any> {
    return this._MainService.get(`users/${id}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  requestTwoFactorAuth(): Observable<any> {
    return this._MainService.post(`users/request-auth`, {}).pipe(
      map((data) => {
        return data?.dat || data;
      }),
      catchError((res) => {
        throw res?.error || res;
      })
    );
  }

  removeTwoFactorAuthRequest(): Observable<any> {
    return this._MainService.post(`users/remove-request`, {}).pipe(
      map((data) => {
        return data?.dat || data;
      }),
      catchError((res) => {
        throw res?.error || res;
      })
    );
  }

  enableTwoFactorAuth(verificationCode: string): Observable<any> {
    return this._MainService
      .post(`users/enable-auth`, {
        verificationCode,
      })
      .pipe(
        map((data) => {
          return data?.dat || data;
        }),
        catchError((res) => {
          throw res?.error || res;
        })
      );
  }

  disableTwoFactorAuth(verificationCode: string): Observable<any> {
    return this._MainService
      .post(`users/disable-auth`, {
        verificationCode,
      })
      .pipe(
        map((data) => {
          return data?.dat || data;
        }),
        catchError((res) => {
          throw res?.error || res;
        })
      );
  }

  verifyTwoFactorAuth(
    id: string,
    authCode: string,
    token?: string
  ): Observable<any> {
    return this._MainService
      .post(
        `users/verify-2fa`,
        {
          user_id: id,
          authCode,
        },
        token
      )
      .pipe(
        map((data) => {
          return data?.dat || data;
        }),
        catchError((res) => {
          throw res?.error || res;
        })
      );
  }

  verifyTwoFactorAuthWIthoutToken(
    id: string,
    authCode: string
  ): Observable<any> {
    return this._MainService
      .post(`users/verify-2fa`, {
        user_id: id,
        authCode,
      })
      .pipe(
        map((data) => {
          return data?.dat || data;
        }),
        catchError((res) => {
          throw res?.error || res;
        })
      );
  }

  /**
   * update user password
   * @param data
   * @returns
   */
  updateUserPassword(data: object): Observable<any> {
    return this._MainService.put(`users/password`, data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  updateUserData(data: object): Observable<any> {
    return this._MainService.put(`users`, data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  requestKYC(data: object): Observable<any> {
    return this._MainService
      .put(`users/approve-or-reject-kyc-verification`, data)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((res) => {
          throw res;
        })
      );
  }

  logOutUser() {
    this._LocalStorageHandleService.destroyAll();
    this._MsgHandelService.showSuccessMsg("", "Successfully Logout");
    this._router.navigateByUrl("/login");
  }
}
