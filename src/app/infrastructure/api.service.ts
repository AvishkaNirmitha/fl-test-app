import { Injectable, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";

/**
 * import services
 * */
import { JwtService } from "./jwt.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from "@w11k/ngx-componentdestroyed";
import { MsgHandelService } from "../services/msg-handel.service";
import { LocalStorageHandleService } from "../services/local-storage-handle.service";

@Injectable({
  providedIn: "root",
})
export class MainService extends OnDestroyMixin implements OnDestroy {
  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private _Router: Router,
    private _MsgHandelService: MsgHandelService,
    private _LocalStorageHandleService: LocalStorageHandleService
  ) {
    super();
  }

  // Perform a GET Request
  get(path: string, external_api: boolean = false): Observable<any> {
    return this.http
      .get(external_api ? `${path}` : `${"environment.api_url"}${"path"}`, {
        headers: this.setHeaders(""),
      })
      .pipe(untilComponentDestroyed(this))
      .pipe(
        catchError((error) => {
          // check if the token is already expired
          // this.handleTokenExp(error);
          throw error;
        })
      );
  }

  // Setting Headers for API Request
  private setHeaders(token: any = ""): HttpHeaders {
    const headersConfig: any = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    headersConfig[
      "x-rapidapi-key"
    ] = `e8cf04317fmshaa414b13f31e25dp123552jsn15c2d2c53536`;
    headersConfig["x-rapidapi-host"] = `imdb188.p.rapidapi.com`;
    return new HttpHeaders(headersConfig);
  }
}
