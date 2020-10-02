import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchRoutingModule } from './search-routing.module';

import { SharedModule } from '../../shared/shared.module';

import { SearchService } from './services/search.service';

import { SearchComponent } from './component/search.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService],
  exports: [SearchComponent]
})
export class SearchModule {}
