import * as fromFiltro from '../actions/filter.action';
import { estadoInicial } from '../state';

export function filtroReducer(state = estadoInicial, action: fromFiltro.FilterActions): fromFiltro.filtrosValidos {
  switch(action.type) {
    case fromFiltro.ActionTypes.SET_FILTRO:
      return  action.filtro;

    default:
      return state;
  }
}
