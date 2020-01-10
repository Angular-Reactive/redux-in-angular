import { initialState, todoAdapter, TodoState } from '../state/todo.state';
import * as fromActions from '../actions/todo.actions';
import { createFeatureSelector } from '@ngrx/store';

// Reducers

export function todoReducer(state = initialState, action: fromActions.TodoActions) {
  switch (action.type) {
    case fromActions.TodoActionTypes.AGREGAR_TODO:
      return todoAdapter.addOne(action.todo, state);

    default:
      return state;
  }
}

/**
 * Default selectors.
 * The selectors will be used to retrieve data from the store.
 */
export const getTodoState = createFeatureSelector<TodoState>('todo');

/**
 * With this constants we'll be able to use all this selectors when
 * we call store select to get the data in a predefined format.
 */
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = todoAdapter.getSelectors(getTodoState);
