/**
 * This component is the responsable of the todo list item management.
*/
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../../../models/todo.model';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TodoState } from '../../store/state/todo.state';
import * as fromTodo from 'src/app/todo/store/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', { static: false }) txtFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    // Cada vez que se cambie el valor del chkField, se disparara' la ACTION ToggleTodoAction
    // this.chkField.valueChanges
    //     .subscribe( () => {
    //       const action = new fromTodo.ToggleTodoAction(this.todo.id);
    //       this.store.dispatch(action);
    //     });
  }
/**
  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if(this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      this.txtInput.setValue(this.todo.texto);
      return;
    }

    if(this.txtInput.value === '') {
      this.txtInput.setValue(this.todo.texto);
      return;
    }

    const action = new fromTodo.EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  borrarTodo() {
    const action = new fromTodo.BorrarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
  */
}
