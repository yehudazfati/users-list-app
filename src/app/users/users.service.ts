import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpClient = inject(HttpClient)

  getUsers(): Observable<UserDetails[]> {
    return this.httpClient.get<UserDetails[]>('https://jsonplaceholder.typicode.com/users');
  }
}
