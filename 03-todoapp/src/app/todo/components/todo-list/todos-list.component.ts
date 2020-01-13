/**
 * This component is the responsable of the todo's list management.
*/
import { Todo } from '../../../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/state/todo.state';
import { Observable } from 'rxjs';
import * as fromTodoReducer from 'src/app/todo/store/reducers/todo.reducers';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo [] = [];
  filtro: string;
  todos$: Observable<any>;

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
    // Getting the actual todos Observable
    this.todos$ = this.store.select(fromTodoReducer.selectAll);
    // this.store.subscribe(state => {
      // this.todos = state.todos;
      // this.filtro = state.filtro;
    // });
  }

}
