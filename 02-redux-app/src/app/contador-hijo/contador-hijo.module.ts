import { HijoComponent } from './components/hijo/hijo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HijoComponent],
  imports: [
    CommonModule
  ],
  exports:[HijoComponent]
})
export class ContadorHijoModule { }
