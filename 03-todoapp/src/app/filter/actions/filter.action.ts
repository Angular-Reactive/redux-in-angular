import { Action } from '@ngrx/store';

export enum ActionTypes {
  SET_FILTRO = '[Filter] Set Filtro'
}

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action {
  readonly type = ActionTypes.SET_FILTRO;

  constructor(public filtro: filtrosValidos) {};
}

export type FilterActions = SetFiltroAction;
