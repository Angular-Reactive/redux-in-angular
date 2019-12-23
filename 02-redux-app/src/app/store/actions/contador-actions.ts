import { Action } from '@ngrx/store';

export enum ActionTypes {
  INCREMENTAR = '[Contador] Incrementar',
  DECREMENTAR = '[Contador] Decrementar',
  MULTIPLICAR = '[Contador] Multiplicar',
  DIVIDIR = '[Contador] Dividir',
  RESET = '[Contador] Reset',
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
}

export type ContadorActions = IncrementarAction |
                      DecrementarAction |
                      MultiplicarAction |
                      DividirAction |
                      ResetAction;
