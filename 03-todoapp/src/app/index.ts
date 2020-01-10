import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/store/reducers/todo.reducers';


export const reducers: ActionReducerMap<any> = {
  todo: todoReducer
}
