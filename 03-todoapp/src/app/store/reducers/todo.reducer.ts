import { estadoInicial } from './../state';
import { Todo } from './../../components/todo/models/todo.model';
import * as fromTodo from './../actions/todo.actions';

export function todoReducer(state = estadoInicial, action: fromTodo.TodoActions): Todo [] {
  switch (action.type) {
    case fromTodo.ActionTypes.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    default:
      return state;
  }
}
