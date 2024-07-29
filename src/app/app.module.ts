import { NgModule } from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './app-components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
