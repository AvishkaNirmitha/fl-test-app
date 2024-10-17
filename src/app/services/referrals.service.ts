import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { MainService } from "../infrastructure/api.service";

@Injectable({
  providedIn: "root",
})
export class ReferralsService {
  constructor(private _MainService: MainService) {}

  getAllRefUsers(data: string): Observable<any> {
    return this._MainService.get(`users/get-user-levels?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }


  getRefEarningsSum(data: string): Observable<any> {
    return this._MainService.get(`commission-share/commission-sum-by-to-user-id?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }


  
  getRefEarningsHistory(data: string): Observable<any> {
    return this._MainService.get(`commission-share/commission-history-by-to-user-id?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

}
