// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

// Ngrx
import { StoreModule } from '@ngrx/store';

// Reducers
import { todoReducer } from './store/reducers/todo.reducers';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosListComponent } from './components/todo-list/todos-list.component';
import { TodoComponent } from './components/todo.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', todoReducer), // name of reducer and reducer itself
    ReactiveFormsModule
  ],
  declarations: [TodoAddComponent,
                 TodoFooterComponent,
                 TodoItemComponent,
                 TodosListComponent,
                 TodoComponent],
  exports: [TodoAddComponent,
            TodoFooterComponent,
            TodoItemComponent,
            TodosListComponent,
            TodoComponent]
})
export class TodoModule { }
