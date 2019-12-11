import { ContadorHijoModule } from './contador-hijo/contador-hijo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorHijoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
