import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '@core/view/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: []
})
export class CoreModule {}
