import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string= "";
  password: string = "";
  message: string = "";

  constructor(public afAuth: AngularFireAuth) { }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then(response => {
      this.message = "Success sign-up"
    }).catch(error => {
      this.message = error.message;
    });
  }
}
