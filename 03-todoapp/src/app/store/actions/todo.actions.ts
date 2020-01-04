import { Action } from '@ngrx/store';

export enum ActionTypes {
  AGREGAR_TODO = '[TODO] Agregar Todo',
}

export class AgregarTodoAction implements Action {
  readonly type = ActionTypes.AGREGAR_TODO;

  constructor(public texto: string) {

  }
}

export type TodoActions = AgregarTodoAction;
