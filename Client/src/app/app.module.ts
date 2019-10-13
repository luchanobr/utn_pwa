import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
//modules
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule.forRoot(), BrowserAnimationsModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
