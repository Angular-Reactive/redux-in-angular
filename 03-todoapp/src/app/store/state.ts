import { Todo } from './../components/todo/models/todo.model';

export interface AppState {
  todos: Todo[];
}

export const estadoInicial: Todo[] = [];
