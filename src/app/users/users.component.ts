import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {UsersService} from "./users.service";
import {UserDetails} from "./app.interfaces";
import {UserDataPipe} from "./user-data.pipe";
import {UserCardComponent} from "./user/user-card.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    NgClass,
    UserDataPipe,
    UserCardComponent
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = inject(UsersService).getUsers();
  trackByIdFunction = (index: number, userDetails: UserDetails) => userDetails.id
}
