import * as fromTodoReducers from '../../app/store/reducers/todo.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromState from './state';

/**
 * We need to create the "ActionReducerMap" that's imported in our app module
 * for StoreModule's "forRoot" method.
 *
 * On top of that, we'll create a "selectAllTodos" selector that selects all
 * our todos from the store.
 *
 * Our "todoAdapter" adapter instance has a "getSelectors" method that takes-in
 * the "selectIds" and "selectTotal". In this case, we only need "selectAll" and
 * we rename it to "selectAllTodos".
 */
export const reducers: ActionReducerMap<any> = {
  todo: fromTodoReducers.todoReducer
};

export const selectTodosState = createFeatureSelector<fromState.AppState>('todos');

export const { selectAll: selectAllTodos } = fromState.todoAdapter.getSelectors(selectTodosState);
