import { Action } from './ngrx-fake/ngrx';
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions';
/**
 * Conterra solo la logica del reducer y la llamada a las acciones.
 */
// REDUCERs
export function reducer(state = 10, action: Action) {
    switch(action.type) {
        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
                return state -= 1;  

        case 'MULTIPLICAR':
                return state * action.payload;  

        case 'DIVIDIR':
                return state / action.payload;  
                
        case 'RESET':
                return state = 0;                 

        default:
            return state;
    }
}

console.log(reducer(10, incrementadorAction)); //11
console.log('Decrementar', reducer(10, decrementadorAction));
console.log('Multiplicar', reducer(10, multiplicarAction));
console.log('Dividir', reducer(10, dividirAction));
console.log('Reset', reducer(10, resetAction));