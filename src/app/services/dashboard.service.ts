import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { MainService } from "../infrastructure/api.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private _MainService: MainService) {}

  getTotalRefCount(data: string): Observable<any> {
    return this._MainService.get(`users/total-ref-count?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
  getTotalROI(data: string): Observable<any> {
    return this._MainService.get(`daily_reward/get-total-roi?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  getTotalInvestments(data: string): Observable<any> {
    return this._MainService
      .get(`investment/get-total-investments?${data}`)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((res) => {
          throw res;
        })
      );
  }

  getXTRData(): Observable<any> {
    return this._MainService.get(`xtr-price/data`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
}
