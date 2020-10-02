import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './modules/home/home.module';
import { SearchModule } from './modules/search/search.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { InitializeService } from './shared/services/initializer.service';

export function loadData(initializeService: InitializeService): {} {
  return () => initializeService.getProductsData();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SearchModule,
    SharedModule
  ],
  providers: [
    InitializeService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadData,
      deps: [InitializeService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
