import { createFeatureSelector } from '@ngrx/store';
import { AppState, todoAdapter } from '../state';

export const getAppState = createFeatureSelector<AppState>('todos');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = todoAdapter.getSelectors(getAppState);
