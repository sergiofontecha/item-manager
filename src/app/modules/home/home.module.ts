import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './component/home.component';
import { LoginComponent } from './elements/login/login.component';

export const ROUTES: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [HomeComponent, LoginComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
