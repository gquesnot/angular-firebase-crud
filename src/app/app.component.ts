import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';

  user: Observable<firebase.User|null>;

  constructor(private afAuth: AngularFireAuth, private router : Router) {
    this.user = this.afAuth.authState;
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/sign-in']);
  }
}
