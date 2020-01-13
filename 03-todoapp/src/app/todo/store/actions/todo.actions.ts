import { Action } from '@ngrx/store';
import { Todo } from '../../../models/todo.model';

export enum TodoActionTypes {
  AGREGAR_TODO = '[TODO] Agregar Todo',
  TOGGLE_TODO = '[TODO] Toggle Todo',
  TOGGLE_ALL_TODO = '[TODO] Toggle All Todo',
  EDITAR_TODO = '[TODO] Editar Todo',
  BORRAR_TODO = '[TODO] Borrar Todo',
  BORRAR_ALL_TODO = '[TODO] Borrar All Todo'
}

export class AgregarTodoAction implements Action {
  readonly type = TodoActionTypes.AGREGAR_TODO;
  constructor(public todo: Todo) {}
}

export class BorrarTodoAction implements Action {
  readonly type = TodoActionTypes.BORRAR_TODO;
  constructor(public id: number) {}
}

export class EditarTodoAction implements Action {
  readonly type = TodoActionTypes.EDITAR_TODO;
  constructor(public id: number, public changes: Partial<Todo>) {}
}

export type TodoActions = AgregarTodoAction |
                          BorrarTodoAction |
                          EditarTodoAction;
