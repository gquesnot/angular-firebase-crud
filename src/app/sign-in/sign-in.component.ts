import { Component } from '@angular/core';
import {Router} from "@angular/router";
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

  constructor(public afAuth: AngularFireAuth, private router: Router) { }


  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }


  signIn() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password).then(
      (response:any) => {
        this.router.navigate(['/']);
      }
    ).catch((error:any) => {
      this.message = error.message;
    });
  }
}
