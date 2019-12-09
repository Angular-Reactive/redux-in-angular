import { ContadorHijoModule } from './contador-hijo/contador-hijo.module';
import { ContadorNietoModule } from './contador-nieto/contador-nieto.module';
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
    ContadorHijoModule,
    ContadorNietoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
