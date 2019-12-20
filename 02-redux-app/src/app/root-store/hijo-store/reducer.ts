import { initialState, State } from './state';
import { Actions, ActionTypes } from './actions';

export function hijoReducer(state = initialState, action: Actions): State {
  switch(action.type) {
    case ActionTypes.MULTIPLICAR:

      return {
        ...state,
        contador: action.payload
      };

    case ActionTypes.DIVIDR:
      return {
        ...state,
        contador: action.payload
      };

    default:
      return state;
  }
}
