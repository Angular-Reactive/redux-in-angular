import { Action } from '@ngrx/store';
/**
 * Actions for the hijo component.
 */
export enum ActionTypes {
  MULTIPLICAR = '[Hijo] Multiplicar',
  DIVIDR = '[Hijo] Dividr'
}

export class MultiplicarAction implements Action {
  readonly type = ActionTypes.MULTIPLICAR;
  constructor(public payload: number) {}
}

export class DividirAction implements Action {
  readonly type = ActionTypes.DIVIDR;
  constructor(public payload: number) {}
}

export type Actions = MultiplicarAction | DividirAction;
