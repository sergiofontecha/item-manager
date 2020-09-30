import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule, FooterComponent, HeaderComponent]
})
export class SharedModule {}
