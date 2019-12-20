import { createFeatureSelector,
          createSelector,
          MemoizedSelector } from '@ngrx/store';

import { State } from './state';

export const getContador = (state: State): number => state.contador;

// "createFeatureSelector" allow us to get a top-level feature state property of the state stree
// simply by calling it out by its feature name.
// We pass it a string that represents the name used to register the feature state in the feature module.
// It uses this string to look up the feature state from within the roor state object, suc as state['hijo']
export const selectHijoState: MemoizedSelector<object, State> = createFeatureSelector<State>('hijo');

export const selectContadorHijo: MemoizedSelector<object, any> = createSelector(selectHijoState, getContador);
