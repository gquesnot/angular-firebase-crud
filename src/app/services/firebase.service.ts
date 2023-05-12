import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Page} from "./page";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getPages(): Observable<any> {
    return this.firestore.collection('pages').snapshotChanges();
  }

  // Add a new page to the 'pages' collection
  createPage(page: Page) {
    return this.firestore.collection('pages').add(page);
  }

  // Update a page in the 'pages' collection
  updatePage(id: string, page: Page) {
    return this.firestore.collection('pages').doc(id).update(page);
  }

  // Delete a page from the 'pages' collection
  deletePage(id: string) {
    return this.firestore.collection('pages').doc(id).delete();
  }
}
