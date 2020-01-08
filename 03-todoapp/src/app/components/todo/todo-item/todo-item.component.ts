import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.model';
import { Store } from '@ngrx/store';
/**
 * This component is the responsable of the todo list item management.
*/
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppState } from '../../../store/state';
import * as fromTodoActions from 'src/app/store/actions/todo.actions';

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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    // Cada vez que se cambie el valor del chkField, se disparara' la ACTION ToggleTodoAction
    this.chkField.valueChanges
        .subscribe( () => {
          const action = new fromTodoActions.ToggleTodoAction({id: this.todo.id, completado: !this.todo.completado});
          this.store.dispatch(action);
        });
  }

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

    const action = new fromTodoActions.EditarTodoAction({id: this.todo.id, texto: this.txtInput.value});
    this.store.dispatch(action);
  }

  borrarTodo() {
    const action = new fromTodoActions.BorrarTodoAction({id: this.todo.id});
    this.store.dispatch(action);
  }
}
