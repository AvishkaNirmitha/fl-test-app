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
@Injectable({
  providedIn: "root",
})
export class TicketService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  // Method to create a new ticket
  createTicket(data: Object) {
    console.log("----data", data);

    const ticketsCollection = collection(this.firestore, "tickets");
    const user = this.auth.currentUser;

    if (!user) {
      throw new Error("User is not logged in");
    }

    // Creating a ticket with the user's UID
    // return addDoc(ticketsCollection, { uid: user?.uid });
    return addDoc(ticketsCollection, { uid: user?.uid, ...data });
  }

  // Method to retrieve all tickets for the logged-in user
  getUserTickets(): Observable<any[]> {
    const user = this.auth.currentUser;

    // if (!user) {
    //   throw new Error("User is not logged in");
    // }

    const ticketsCollection = collection(this.firestore, "tickets");
    return collectionData(ticketsCollection, { idField: "id" }) as Observable<
      any[]
    >;
  }
}
