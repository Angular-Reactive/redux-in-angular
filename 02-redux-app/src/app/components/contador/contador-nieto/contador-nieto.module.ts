import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoComponent } from './components/nieto/nieto.component';
import { StoreModule } from '@ngrx/store';
import { contadorNietoReducer } from './store/contador-nieto.reducer';



@NgModule({
  declarations: [NietoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('nieto', contadorNietoReducer)
  ],
  exports: [NietoComponent]
})
export class ContadorNietoModule { }
