/**
 * In the root STORE module we nedd to import all feature modules,
 * and the following NgRx modules: StoreModule.forRoot({}) and
 * EffectsMOdule.forRoot([]).
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoStoreModule } from './hijo-store/hijo-store.module';
import { NietoStoreModule } from './nieto-store/nieto-store.module';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HijoStoreModule,
    NietoStoreModule,
    StoreModule.forRoot({})
  ]
})
export class RootStoreModule { }
