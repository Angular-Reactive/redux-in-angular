import { HijoComponent } from './components/hijo/hijo.component';
import { ContadorNietoModule } from '../contador-nieto/contador-nieto.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HijoComponent],
  imports: [
    CommonModule,
    ContadorNietoModule
  ],
  exports:[HijoComponent]
})
export class ContadorHijoModule { }
