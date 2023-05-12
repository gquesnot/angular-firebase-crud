import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = "";
  password: string = "";
  message: string = "";

  constructor(public afAuth: AngularFireAuth) {
  }

  signIn() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password).then(
      response => {
        this.message = "Success sign-in"
      }
    ).catch(error => {
      this.message = error.message;
    });
  }
}
