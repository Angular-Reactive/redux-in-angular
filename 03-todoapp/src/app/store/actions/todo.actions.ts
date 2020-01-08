import { Action } from '@ngrx/store';
import { Todo } from '../../components/todo/models/todo.model';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
  AGREGAR_TODO = '[TODO] Agregar Todo',
  TOGGLE_TODO = '[TODO] Toggle Todo',
  TOGGLE_ALL_TODO = '[TODO] Toggle All Todo',
  EDITAR_TODO = '[TODO] Editar Todo',
  BORRAR_TODO = '[TODO] Borrar Todo'
}

/**
export class AgregarTodoAction implements Action {
  readonly type = ActionTypes.AGREGAR_TODO;

  constructor(public texto: string) {

  }
}

export class ToggleTodoAction implements Action {
  readonly type = ActionTypes.TOGGLE_TODO;

  constructor(public id: number) {

  }
}

export class ToggleAllTodoAction implements Action {
  readonly type = ActionTypes.TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
  readonly type = ActionTypes.EDITAR_TODO;

  constructor(public id: number, public texto: string) {

  }
}

export class BorrarTodoAction implements Action {
  readonly type = ActionTypes.BORRAR_TODO;

  constructor(public id: number) {

  }
}
 */

export class AgregarTodoAction implements Action {
  readonly type = ActionTypes.AGREGAR_TODO;

  constructor(public payload: {todo: Todo}) {}
}

export class ToggleTodoAction implements Action {
  readonly type = ActionTypes.TOGGLE_TODO;

  constructor(public payload: {id: string, completado: boolean}) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = ActionTypes.TOGGLE_ALL_TODO;

  constructor(public payload: Update<Todo>[]) {}
}

export class EditarTodoAction implements Action {
  readonly type = ActionTypes.EDITAR_TODO;

  constructor(public payload: {id: string, texto: string}) {}
}

export class BorrarTodoAction implements Action {
  readonly type = ActionTypes.BORRAR_TODO;

  constructor(public payload: {id: string}) {}
}

export type TodoActions = AgregarTodoAction |
                          ToggleTodoAction |
                          ToggleAllTodoAction |
                          EditarTodoAction |
                          BorrarTodoAction;
