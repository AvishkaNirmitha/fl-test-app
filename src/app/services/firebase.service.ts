import { Injectable } from "@angular/core";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@angular/fire/auth";
import { User } from "firebase/auth";
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  constructor(private auth: Auth) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then((userCredential) => {
        console.log("Google sign-in successful!", userCredential);
        return userCredential;
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        throw error; // This will throw the error to the caller
      });
  }
}
