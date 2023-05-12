import { Injectable } from '@angular/core';
import {map, Observable, take} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/sign-in']);
          return false;
        }
      })
    );
  }
}
