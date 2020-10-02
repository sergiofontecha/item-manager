import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/Operators/tap';

@Injectable()
export class InitializeService {
  public datos: {};

  constructor(private _httpClient: HttpClient) {}

  getProductsData(): Promise<any> {
    return this._httpClient
      .get(
        'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json'
      )
      .pipe(
        tap(data => {
          this.datos = data;
        })
      )
      .toPromise();
  }
}
