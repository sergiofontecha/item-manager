import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private _httpService: HttpClient) {}

  public getUsers(): Observable<any> {
    return this._httpService.get('../../../../assets/credentials.json');
  }

  public userExist(email: string, password: string): boolean {
    let user: boolean;
    let exist: boolean;
    const data: Observable<any> = this.getUsers();

    data.subscribe(users => {
      users.users.find((element: any) => {
        user = element.email === email && element.password === password;
      });

      exist = user ? true : false;
    });

    return exist;
  }
}
