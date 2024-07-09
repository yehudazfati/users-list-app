import {Component, inject, Injectable} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {of} from "rxjs";
import {UsersService} from "./users.service";
import {UserDetails} from "./app.interfaces";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  users = inject(UsersService).getUsers();
  trackByIdFunction = (index: number, userDetails: UserDetails) => userDetails.id
}
