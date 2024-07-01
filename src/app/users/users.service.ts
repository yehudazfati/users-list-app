import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetails} from "./app.interfaces";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpClient = inject(HttpClient)

  getUsers(): Observable<UserDetails[]> {
    return this.httpClient.get<UserDetails[]>('https://jsonplaceholder.typicode.com/users');
  }
}
