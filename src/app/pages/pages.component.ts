import { Component } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {Page} from "../services/page";
import {PageFormComponent} from "../page-form/page-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  pages: Page[] = [];
  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) {
  }


  ngOnInit() {
    this.firebaseService.getPages().subscribe(data => {
      this.pages = data.map((e: any ) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      })
    });
  }


  openCreateModal() {
    const dialogRef = this.dialog.open(PageFormComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe((page:Page) => {
      if (page) {
        this.firebaseService.createPage(page);
      }
    });
  }

  openUpdateModal(page:Page) {
    const dialogRef = this.dialog.open(PageFormComponent, {
      data: page
    });

    dialogRef.afterClosed().subscribe((updatedPage:Page) => {
      if (updatedPage) {
        this.firebaseService.updatePage(page.id, updatedPage);
      }
    });
  }


  deletePage(id:string) {
    this.firebaseService.deletePage(id)
  }

}
