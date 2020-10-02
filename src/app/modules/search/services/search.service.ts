import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SearchService {
  private _options = new BehaviorSubject({});
  readonly selectOptions = this._options.asObservable();

  constructor(private _httpService: HttpClient) {}

  getPriceOptions(): any {
    return this._httpService.get('../../../../assets/priceOptions.json');
  }
}
