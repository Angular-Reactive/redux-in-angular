import { Action } from './ngrx-fake/ngrx';
import { reducer } from './app-2';
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction } from './contador/contador.actions';

// Usar el reducer
console.log('Incrementar', reducer(10, incrementadorAction)); // 11



console.log('Decrementar', reducer(10, decrementadorAction));



console.log('Multiplicar', reducer(10, multiplicarAction));



console.log('Dividir', reducer(10, dividirAction));