import { incrementadorAction } from './contador/contador.actions';
import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';

 
const store: Store = createStore(contadorReducer);

// Subscribirse a los cambios del Store
store.subscribe(() => {
    // Obteniendo el STATE actual
    console.log('Subs:', store.getState());
});

// Modificando el STATE
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);