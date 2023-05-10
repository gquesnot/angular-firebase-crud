import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user: any; // The user object for updating
  @Output() userUpdated = new EventEmitter<void>(); // Emit an event after user update

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // If there is a user object, set the form values
    if (this.user) {
      this.userForm.patchValue({
        username: this.user.username,
        email: this.user.email,
        password: this.user.password
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.user) {
        // Update the user
        this.userService.updateUser(this.user.id, this.userForm.value).subscribe({
          next: () => {
            console.log('User updated successfully');
            this.userUpdated.emit(); // Emit the userUpdated event
          },
          error: (error) => console.error(error)
        });
      } else {
        // Create a new user
        this.userService.createUser(this.userForm.value).subscribe({
          next: () => {
            console.log('User created successfully');
            this.userForm.reset(); // Reset the form
          },
          error: (error) => console.error(error)
        });
      }
    }
  }
}
