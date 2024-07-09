import {Pipe, PipeTransform} from '@angular/core';
import {UserDetails} from "./app.interfaces";
import {fullJustify} from "./text-justification";

@Pipe({
  name: 'userData',
  standalone: true
})
export class UserDataPipe implements PipeTransform {

  transform(user: UserDetails, ...args: unknown[]): string[] {
      const arr = [
          String(user.id),
          user.name,
          user.username,
          user.email,
          user.phone,
          user.website,
          user.address.street,
          user.address.suite,
          user.address.city,
          user.address.zipcode,
          String(user.address.geo.lat),
          String(user.address.geo.lng),
          user.company.name,
          user.company.catchPhrase,
          user.company.bs
      ];
    return fullJustify(arr, args[0] as number);
  }

}
