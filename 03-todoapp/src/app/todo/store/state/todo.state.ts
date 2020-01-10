import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../../../models/todo.model';


// Entity adapter
export const todoAdapter = createEntityAdapter<Todo>();


// Entity State
export interface TodoState extends EntityState<Todo> {}

// Default data

const defaultTodo = {
  ids: [123], // Array of IDs and this makes it possible to order all of our entites
  entities: { // entities is an object where each key and that object corresponds to an ID in the array
    123: {
      id: 123,
      texto: 'Vencer a Thanos',
      completado: false
    }
  }
};

//  Initial state
export const initialState: TodoState = todoAdapter.getInitialState(defaultTodo);
