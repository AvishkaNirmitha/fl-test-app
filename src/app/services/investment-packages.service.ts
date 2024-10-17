import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { MainService } from "../infrastructure/api.service";

@Injectable({
  providedIn: "root",
})
export class InvestmentPackagesService {
  constructor(private _MainService: MainService) {}

  getAll(data: string): Observable<any> {
    return this._MainService.get(`xtr-license-package?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
  getAllInvestedPackages(data: string): Observable<any> {
    return this._MainService.get(`investment?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  investPackage(data: Object): Observable<any> {
    return this._MainService.post(`investment`, data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  refLicensePurchase(data: Object): Observable<any> {
    return this._MainService.post(`investment/purchase-ref-license`, {}).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  TransferRewards(data: Object): Observable<any> {
    return this._MainService.post("daily-rewards-withdrawal", data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  getOverAllProgressChartData(data: string): Observable<any> {
    return this._MainService.get(`users/over-all-progress-chart-data?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  getDailyRewardsByPurchasedPackage(data: string): Observable<any> {
    return this._MainService.get(`daily_reward?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

}
