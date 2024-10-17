import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { MainService } from "../infrastructure/api.service";

@Injectable({
  providedIn: "root",
})
export class XtrRateService {
  constructor(private _MainService: MainService) {}

  getXtrRate(): Observable<any> {
    return this._MainService.get(`xtr-price/latest`).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
}
