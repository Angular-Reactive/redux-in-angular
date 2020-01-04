import { Todo } from './../components/todo/models/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje de Ironman');

export interface AppState {
  todos: Todo[];
}

export const estadoInicial: Todo[] = [todo1, todo2, todo3];
