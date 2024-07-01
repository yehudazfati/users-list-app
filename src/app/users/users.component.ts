import {Component, inject, Injectable} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {of} from "rxjs";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users = inject(UsersService).getUsers();
}
