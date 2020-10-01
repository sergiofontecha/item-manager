import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './component/home.component';
import { LoginComponent } from './elements/login/login.component';

import { LoginService } from './services/login.service';

export const ROUTES: Routes = [{ path: 'home', component: HomeComponent }];

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HomeComponent, LoginComponent],
  providers: [LoginService],
  exports: [HomeComponent]
})
export class HomeModule {}
