import {Component, Input} from '@angular/core';
import {UserDetails} from "../app.interfaces";
import {UserDataPipe} from "../user-data.pipe";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [
    UserDataPipe,
    NgForOf
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() user!: UserDetails;
}
