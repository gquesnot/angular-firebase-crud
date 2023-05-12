import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgGridModule} from "ag-grid-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { PagesComponent } from './pages/pages.component';
import { PageFormComponent } from './page-form/page-form.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthGuard} from "@angular/fire/auth-guard";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services/auth.service";


import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ShuffleStringPipe } from './pipes/shuffle-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageFormComponent,
    SignInComponent,
    SignUpComponent,
    ShuffleStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
