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
  public showResult: boolean;
  public itemsToShow: any[] = [];
  public minPrice: number;
  public maxPrice: number;

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
    this.showResult = false;
  }

  ngOnInit(): void {
    this._initialData = this._initializeService.getProductsData();
    this.selectOptions$ = this._searchService.getPriceOptions();
  }

  getItemsByText(data, filter): void {
    console.log('text');
    data.map(item => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const value = item[key];
          if (
            (value === filter || value.includes(filter)) &&
            !this.itemsToShow.includes(item) &&
            item !== undefined
          ) {
            this.itemsToShow.push(item);
            console.log('items to show', this.itemsToShow);
          }
        }
      }
    });
  }

  getItemsByMinMaxPrice(data): void {
    console.log('price');
    data.map(item => {
      if (this.minPrice !== undefined && this.maxPrice !== undefined) {
        console.log('max & min');
        if (
          item.price >= this.minPrice &&
          item.price <= this.maxPrice &&
          !this.itemsToShow.includes(item) &&
          item !== undefined
        ) {
          this.itemsToShow.push(item);
          console.log('items to show', this.itemsToShow);
        }
      } else if (this.minPrice !== undefined && this.maxPrice === undefined) {
        console.log('only min');
        if (
          parseInt(item.price, 10) >= this.minPrice &&
          !this.itemsToShow.includes(item)
        ) {
          this.itemsToShow.push(item);
          console.log('items to show', this.itemsToShow);
        }
      } else if (this.maxPrice !== undefined && this.minPrice === undefined) {
        console.log('only max', this.maxPrice, item.price);
        if (
          parseInt(item.price, 10) <= this.maxPrice &&
          !this.itemsToShow.includes(item) &&
          item !== undefined
        ) {
          this.itemsToShow.push(item);
          console.log('items to show', this.itemsToShow);
        }
      } else {
        return null;
      }
    });
  }

  filterItems(data, filterData): void {
    filterData.forEach((filter, index) => {
      if (index === 1 && filter !== '' && filter !== undefined) {
        console.log('pass');
        this.getItemsByText(data, filter);
      } else if (index === 2 && filter !== '' && filter !== undefined) {
        console.log('pass');
        this.minPrice = filter;
      } else if (index === 3 && filter !== '' && filter !== undefined) {
        console.log('pass');
        this.maxPrice = filter;
      }
    });

    this.getItemsByMinMaxPrice(data);
    this.getItemsByMinMaxPrice(this.itemsToShow);
  }

  getFilters(formValues): void {
    let filterData: string[];
    const data = this._initialData.__zone_symbol__value.items;

    filterData = Object.values(formValues);
    this.filterItems(data, filterData);
  }

  onSubmit(formValues): void {
    this.itemsToShow = [];
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.getFilters(formValues);
  }
}
