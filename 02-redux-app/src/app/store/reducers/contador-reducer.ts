import { ContadorActions, ActionTypes } from './../actions/contador-actions';

export function contadorReducer(state: number = 10, action: ContadorActions) {
  switch(action.type) {
    case ActionTypes.INCREMENTAR:
      return state + 1;


    case ActionTypes.DECREMENTAR:
      return state - 1;

    case ActionTypes.MULTIPLICAR:
      return state * action.payload;

    case ActionTypes.DIVIDIR:
      return state / action.payload;

    case ActionTypes.RESET:
      return 0;

    default:
      return state;
  }
}
