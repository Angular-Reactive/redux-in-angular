import { AppState } from './contador.reducer';
import { Action } from '@ngrx/store';
/**
 * Reducers de la aplicacion.
 */

 // Este seria el objeto que sera manejado por el STORE
export interface AppState {
  contador: number;
}

export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';
export const MULTIPLICAR = 'MULTIPLICAR';
export const DIVIDIR = 'DIVIDIR';
export const RESET = 'RESET';

export function contadorReducer(state: number = 10, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENTAR':
      return state += 1;

    case 'DECREMENTAR':
      return state -= 1;

    case 'MULTIPLICAR':
      return state *= 1;

    case 'DIVIDIR':
      return state /= 1;

    case 'RESET':
      return state = 0;

    default:
      return state;
  }
}
