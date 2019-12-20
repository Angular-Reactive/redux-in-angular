/**
 * Now that we have built our Root Store Module, composed of Feature Store Modules,
 * let's add it to the main app.module.ts and show just how neat and clean the wiring
 * up process is.
 */
// Modules
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { { RootStoreModule } from './root-store';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
