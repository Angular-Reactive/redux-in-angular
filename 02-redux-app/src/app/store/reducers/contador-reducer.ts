import { ContadorActions, ActionTypes } from './../actions/contador-actions';
import { State } from './../state';
import { initialState } from '../state';

export function contadorReducer(state = initialState, action: ContadorActions): State {
  switch(action.type) {
    case ActionTypes.INCREMENTAR:
      return {contador: state.contador + 1};


    case ActionTypes.DECREMENTAR:
      return {contador: state.contador - 1};

    case ActionTypes.MULTIPLICAR:
      return {contador: state.contador * action.payload};

    case ActionTypes.DIVIDIR:
      return {contador: state.contador / action.payload};

    case ActionTypes.RESET:
      return {contador: action.payload};

    default:
      return state;
  }
}
