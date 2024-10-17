import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { MainService } from "../infrastructure/api.service";

@Injectable({
  providedIn: "root",
})
export class DepositHistoryService {
  constructor(private _MainService: MainService) {}

  getAll(data: string): Observable<any> {
    return this._MainService.get(`user-wallet-deposit-history?${data}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
}
