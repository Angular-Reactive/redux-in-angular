/**
 * This component is the responsable of the todo item creation.
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import * as fromTodoActions from 'src/app/store/actions/todo.actions';
import { Todo } from '../models/todo.model';
import { UUID } from 'angular2-uuid';
import { selectAllTodos } from 'src/app/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  generateUUID() {
    return UUID.UUID();
  }

  agregarTodo() {
    // if (this.txtInput.invalid) {
    //   return;
    // }

    // const action = new fromTodo.AgregarTodoAction(this.txtInput.value);
    // this.store.dispatch(action);
    // this.txtInput.setValue('');

    const todo: Todo = {
      id: this.generateUUID(),
      texto: this.txtInput.value,
      completado: false
    };

    this.store.dispatch(new fromTodoActions.AgregarTodoAction({todo}));
    console.log(selectAllTodos);
    this.txtInput.setValue('');
  }

}
