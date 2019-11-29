import { Action } from '../ngrx-fake/ngrx';
/**
 * Acciones del contador.
 */
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 5
};