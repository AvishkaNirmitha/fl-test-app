import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MainService } from '../infrastructure/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _MainService: MainService) {}

  verifyToken(data: any): Observable<any> {
    return this._MainService
      .post('admins/verify-token', data, '')
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
