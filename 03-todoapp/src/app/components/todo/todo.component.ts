/**
 * This component is the responsable of the todo's management.
*/
import { Component, OnInit } from '@angular/core';
import * as fromTodoActions from 'src/app/store/actions/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false; // Me permitira saber cuando tengo que marcar/desmarcar todo

  constructor(private store: Store<AppState>) { }

  ngOnInit() { }

  toggleAll() {
    this.completado = !this.completado;

    // const action = new fromTodoActions.ToggleAllTodoAction(this.completado);
    // this.store.dispatch(action);
  }

}
