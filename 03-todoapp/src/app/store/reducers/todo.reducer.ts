import { estadoInicial } from './../state';
import { Todo } from './../../components/todo/models/todo.model';
import * as fromTodo from './../actions/todo.actions';


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
