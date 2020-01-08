import * as fromTodo from './../actions/todo.actions';
import { initialState, todoAdapter } from '../state';

/**
 * In our reducer we call methods on an adaptat that we create
 * using "createEntityAdapter" in the "state.ts" file.
 * The available adapter methods are "addOne", "addMAny", "addAll",
 * "removeOne", "removeMany", "removeAll", "updateOne" and "updateMany".
 *
 * Our adapter also has a handy "getInitialState" method to create an
 * initial state that's properly type.
 */
export function todoReducer(state = initialState, action: fromTodo.TodoActions) {
  switch (action.type) {
    case fromTodo.ActionTypes.AGREGAR_TODO:
      return todoAdapter.addOne(action.payload.todo, state);

    case fromTodo.ActionTypes.TOGGLE_TODO:
      return todoAdapter.updateOne(
        {id: action.payload.id, changes: { completado: action.payload.completado}},
        state
      );

    case fromTodo.ActionTypes.TOGGLE_ALL_TODO:
      return todoAdapter.updateMany(action.payload, state);

    case fromTodo.ActionTypes.EDITAR_TODO:
      return todoAdapter.updateOne({
        id: action.payload.id,
        changes: {texto : action.payload.texto},
      }, state);

    case fromTodo.ActionTypes.BORRAR_TODO:
      return todoAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}


/**
export function todoReducer(state = estadoInicial, action: fromTodo.TodoActions): Todo [] {
  switch (action.type) {
    case fromTodo.ActionTypes.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case fromTodo.ActionTypes.TOGGLE_TODO:
      // El metodo map crea un nuevo array con los resultdos de la llamada a la funcion indicada
      return state.map( todoEdit => {
        if (todoEdit.id === action.id ) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          }
        } else {
          return todoEdit;
        }
      });

    case fromTodo.ActionTypes.TOGGLE_ALL_TODO:
      return state.map( todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });

    case fromTodo.ActionTypes.EDITAR_TODO:
      return state.map( todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          }
        } else {
          return todoEdit;
        }
      });

    case fromTodo.ActionTypes.BORRAR_TODO:
      return state.filter( todoEdit => todoEdit.id !== action.id);

    default:
      return state;
  }
}
*/
