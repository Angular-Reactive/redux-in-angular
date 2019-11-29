import { Action } from './ngrx-fake/ngrx';
/**
 * Conterra solo la logica del reducer y la llamada a las acciones.
 */
// REDUCERs
function reducer(state = 10, action: Action) {
    switch(action.type) {
        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
                return state -= 1;  

        case 'MULTIPLICAR':
                return state * action.payload;  

        case 'DIVIDIR':
                return state / action.payload;                  

        default:
            return state;
    }
}