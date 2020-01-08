import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../store/reducers/todo.reducer';

/**
 * We import "StoreModule" and call "forFeature" on it, giving it
 * a name for the feature and a reducer.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', todoReducer)
  ]
})
export class TodoModule { }
