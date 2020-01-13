/**
 * This component is the responsable of the todo's management.
*/
import { Component, OnInit } from '@angular/core';
import * as fromTodoReducer from 'src/app/todo/store/reducers/todo.reducers';
import { Store } from '@ngrx/store';
import { TodoState } from '../store/state/todo.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false; // Me permitira saber cuando tengo que marcar/desmarcar todo
  todos$: Observable<any>;

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
    // Getting the actual todos Observable
    // this.todos$ = this.store.select(fromTodoReducer.selectAll);
  }

  toggleAll() {
    // this.completado = !this.completado;

    // const action = new fromTodo.ToggleAllTodoAction(this.completado);
    // this.store.dispatch(action);
  }

}
