import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Page} from "../services/page";

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {
  pageForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PageFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Page,
    private fb: FormBuilder
  ) {
    this.pageForm = this.fb.group({
      name: [data ? data.name : '', Validators.required],
      content: [data ? data.content : '', Validators.required],
      path: [data ? data.path : '', Validators.required]
    });
  }

  save() {
    this.dialogRef.close(this.pageForm.value);
  }
}
