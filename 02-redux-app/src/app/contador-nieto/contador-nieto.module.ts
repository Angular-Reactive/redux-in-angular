import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoComponent } from './components/nieto/nieto.component';



@NgModule({
  declarations: [NietoComponent],
  imports: [
    CommonModule
  ],
  exports: [NietoComponent]
})
export class ContadorNietoModule { }
