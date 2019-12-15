// Modules
import { HijoComponent } from './components/hijo/hijo.component';
import { ContadorNietoModule } from '../contador-nieto/contador-nieto.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

// Reducers
import { contadorHijoReducer } from './store/contador-hijo.reducer';


@NgModule({
  declarations: [HijoComponent],
  imports: [
    CommonModule,
    ContadorNietoModule,
    StoreModule.forFeature('hijo', contadorHijoReducer)
  ],
  exports: [HijoComponent]
})
export class ContadorHijoModule { }
