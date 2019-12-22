import { Action } from '@ngrx/store';

export enum ActionTypes {
  INCREMENTAR = '[Root] Incrementar',
  DECREMENTAR = '[Root] Decrementar',
  MULTIPLICAR = '[Hijo] Multiplicar',
  DIVIDIR = '[Hijo] Dividir',
  RESET = '[Nieto] Reset',
}

export class IncrementarAction implements Action {
  readonly type = ActionTypes.INCREMENTAR;
}

export class DecrementarAction implements Action {
  readonly type = ActionTypes.DECREMENTAR;
}

export class MultiplicarAction implements Action {
  readonly type = ActionTypes.MULTIPLICAR;
  constructor(public payload: number){}
}

export class DividirAction implements Action {
  readonly type = ActionTypes.DIVIDIR;
  constructor(public payload: number){}
}

export class ResetAction implements Action {
  readonly type = ActionTypes.RESET;
  constructor(public payload: number) { payload = 0; }
}

export type ContadorActions = IncrementarAction |
                      DecrementarAction |
                      MultiplicarAction |
                      DividirAction |
                      ResetAction;
