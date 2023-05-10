import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.register(this.newUser).subscribe({
      next: (data) => {
        console.log('User created successfully'),
        this.userService.login(this.newUser.username, this.newUser.password).subscribe({

        })

      },
      error: (error) => console.error(error),
      complete: () => console.log('User created successfully')
  });
  }
}
