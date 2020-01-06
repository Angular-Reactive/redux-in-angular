import { Action } from '@ngrx/store';

export enum ActionTypes {
  AGREGAR_TODO = '[TODO] Agregar Todo',
  TOGGLE_TODO = '[TODO] Toggle Todo'
}

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

export type TodoActions = AgregarTodoAction | ToggleTodoAction;
