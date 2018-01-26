import { Component, OnInit } from '@angular/core';

// 1. Import the UserService
import { UserService } from '../user.service';

// 2. Import the User Object/Schema
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // 4. Create a users property of type user
  users: User;

  // 5. Inject the UsersService into the constructor
  constructor(private userService: UserService) { }

  // 7. Make a call to the service on initialization
  ngOnInit() {
    this.getUsers();
  }

  // 6. Craete a local wrapper for
  getUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response.users
      }
    );
  }
}
