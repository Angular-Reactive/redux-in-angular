/**
 * This component is the responsable of the todo item creation.
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/state/todo.state';
import { Todo } from '../../../models/todo.model';
import * as fromTodoActions from 'src/app/todo/store/actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if (this.txtInput.invalid) {
      return;
    }

    const todo: Todo = {
      id: Math.random(),
      texto: this.txtInput.value.charAt(0).toUpperCase() + this.txtInput.value.slice(1),
      completado: false
    };

    this.store.dispatch(new fromTodoActions.AgregarTodoAction(todo));
    this.txtInput.setValue('');
  }
}
