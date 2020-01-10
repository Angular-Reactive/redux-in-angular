// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';

// Reducers
import { todoReducer } from './store/reducers/todo.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', todoReducer) // name of reducer and reducer itself
  ],
  declarations: [],
  exports: []
})
export class TodoModule { }
