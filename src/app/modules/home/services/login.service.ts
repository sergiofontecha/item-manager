import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginService {
  private _exist = new BehaviorSubject({});
  readonly cast = this._exist.asObservable();

  constructor(private _httpService: HttpClient) {}

  public getUsers(): Observable<any> {
    return this._httpService.get('../../../../assets/credentials.json');
  }

  public userExist(email: string, password: string): void {
    let user: boolean;
    const data: Observable<any> = this.getUsers();

    data.subscribe(
      users => {
        users.users.find((element: any) => {
          user = element.email === email && element.password === password;
        });
      },
      err => {
        console.error(err);
      },
      () => {
        user ? this._exist.next(true) : this._exist.next(false);
      }
    );
  }
}
