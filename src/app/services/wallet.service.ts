import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { MainService } from "../infrastructure/api.service";

@Injectable({
  providedIn: "root",
})
export class WalletService {
  constructor(private _MainService: MainService) {}

  getWalletBalance(user_id: string): Observable<any> {
    // return this._MainService.get(`trade-wallet?user_id=${user_id}`).pipe(
    return this._MainService.get(`user-wallet`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  startTrading(data: Object): Observable<any> {
    return this._MainService.post(`trade-wallet/start-trade`, data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  reloadTransactions(data: Object): Observable<any> {
    return this._MainService.post(`user-wallet-deposit`, data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  becomeAffiliate(data: Object): Observable<any> {
    return this._MainService.post(`/users/became-a-affiliate`, data).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }

  getTradingFees(user_id: string): Observable<any> {
    return this._MainService
      .get(`trading_fees_settings/user?user_id=${user_id}`)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((res) => {
          throw res;
        })
      );
  }

  createWithdrawalRequest(data: Object): Observable<any> {
    return this._MainService
      .post("commission-withdrawal/create-withdrawal-request", data)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((res) => {
          throw res;
        })
      );
  }

  getPendingDespots(): Observable<any> {
    // return this._MainService.get(`trade-wallet?user_id=${user_id}`).pipe(
    return this._MainService
      .get(`user-wallet-deposit-history/pending-deposit`)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((res) => {
          throw res;
        })
      );
  }
}
