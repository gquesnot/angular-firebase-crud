import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'btns-cell-component',
  template: `
    <button (click)="updateUser($event)">Update</button>
    <button (click)="deleteUser($event)">Delete</button>
  `,
})
export class BtnsCellComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  updateUser(event: any): void {
    this.params.updateUser()
  }

  deleteUser(event: any): void {
    this.params.deleteUser()
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }
}
