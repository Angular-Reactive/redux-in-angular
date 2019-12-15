// Modules
import { environment } from './../environments/environment';
import { ContadorHijoModule } from './components/contador/contador-hijo/contador-hijo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './app.component';

// Reducers
import { contadorReducer } from './components/contador/store/contador.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorHijoModule,
    StoreModule.forRoot({contador: contadorReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
