import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  getDoc,
} from "@angular/fire/firestore";
import { Auth } from "@angular/fire/auth";
import { Observable } from "rxjs";

import { query, where } from "@angular/fire/firestore";
import { JwtTokenValidatorService } from "./jwt-token-validator.service";
import { MainService } from "../infrastructure/api.service";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  constructor(
    private firestore: Firestore,
    private auth: Auth,
    private JwtTokenValidatorService: JwtTokenValidatorService,
    private _MainService: MainService
  ) {}

  // Method to create a new ticket
  createTicket(data: Object) {
    console.log("----data", data);

    const ticketsCollection = collection(this.firestore, "tickets");
    const user = this.auth.currentUser;

    if (!user) {
      throw new Error("User is not logged in");
    }

    return addDoc(ticketsCollection, { uid: user?.uid, ...data });
  }

  getUserTickets(): Observable<any[]> {
    const ticketsCollection = collection(this.firestore, "tickets");

    // Create a query to get tickets where uid matches the logged-in user's UID
    const userTicketsQuery = query(
      ticketsCollection,
      where("uid", "==", this.JwtTokenValidatorService.getUserId())
    );

    // Return the filtered data as an observable
    return collectionData(userTicketsQuery, { idField: "id" }) as Observable<
      any[]
    >;
  }

  getMovies(): Observable<any> {
    return this._MainService.get(environment.imdb_api, true).pipe(
      map((data) => {
        return data;
      }),
      catchError((res) => {
        throw res;
      })
    );
  }
}
