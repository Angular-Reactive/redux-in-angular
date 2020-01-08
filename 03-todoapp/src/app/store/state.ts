import { Todo } from './../components/todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducer';
import * as fromFiltro from '../filter/reducers/filter.reducer';
import * as fromFiltroActions from '../filter/actions/filter.action';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

/**
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje de Ironman');

todo2.completado = true;

export interface AppState {
  todos: Todo[];
  filtro: fromFiltroActions.filtrosValidos;
}

export const estadoInicial: Todo[] = [todo1, todo2, todo3];


// Combinacion de todos los reducers que usa la aplicacion
export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};
*/

export interface AppState extends EntityState<Todo> {};

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: AppState = todoAdapter.getInitialState();



