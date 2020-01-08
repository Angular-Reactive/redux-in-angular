import { Todo } from './../models/todo.model';
/**
 * This component is the responsable of the todo's list management.
*/
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { selectAllTodos } from 'src/app/store';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo [] = [];
  todos$: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todos$ = this.store.select(selectAllTodos);

    // this.store.subscribe(state => {
    //   this.todos = state.todos;
    // });
  }

}
