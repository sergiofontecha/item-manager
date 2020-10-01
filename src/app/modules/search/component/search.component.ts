import { Component, OnInit } from '@angular/core';
import { InitializeService } from '../../../shared/services/initializer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private _initialData: any;
  public selectOptions$: Observable<any>;
  public searchForm: any;

  constructor(
    private _initializeService: InitializeService,
    private _fb: FormBuilder,
    private _searchService: SearchService
  ) {
    this.searchForm = this._fb.group({
      searchBy: ['', Validators.required],
      textToMatch: ['', Validators.required],
      minPrice: ['', Validators.required],
      maxPrice: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this._initialData = this._initializeService.getProductsData();
    this.selectOptions$ = this._searchService.getPriceOptions();
  }

  onSubmit(formValues) {
    console.log('holaaaaaaa', formValues);
  }
}
