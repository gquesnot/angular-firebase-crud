import { Component, OnInit } from '@angular/core';
import {GridApi, GridOptions} from "ag-grid-community";
import {UserService} from "../user.service";
import {BtnsCellComponent} from "../btns-cell/btns-cell.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  gridOptions: GridOptions;
  columnDefs: any[]; // Column definitions for the AgGrid
  rowData: any[]; // Row data for the AgGrid

  selectedUser: any;

  private gridApi!: GridApi;

  constructor(private userService: UserService) {
    this.columnDefs = [
      { field: 'id', headerName: 'ID' },
      { field: 'username', headerName: 'Username' },
      { field: 'email', headerName: 'Email' },
      {
        headerName: 'Actions',
        cellRenderer: BtnsCellComponent,
        cellRendererParams: {
          updateUser: this.userUpdated.bind(this),
          deleteUser: this.deleteUser.bind(this)
        }
      }
    ];

    this.gridOptions = {
      defaultColDef: {
        resizable: true,
        sortable: true,
        filter: true
      },
      rowSelection: 'single',
      onCellClicked: this.onCellClicked.bind(this),
      onFirstDataRendered: (params: any) => {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
      }
    };

    this.rowData = [];
    this.selectedUser = null;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.rowData = users;
    });
  }

  onCellClicked(params: any): void {
    if (params.event.target.dataset.action === 'edit') {
      this.selectedUser = params.data;
    } else if (params.event.target.dataset.action === 'delete') {
      this.deleteUser(params.data.id);
    }
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

  userUpdated(): void {
    this.selectedUser = null;
    this.loadUsers();
  }
}
