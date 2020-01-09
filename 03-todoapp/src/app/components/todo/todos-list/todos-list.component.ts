import { Todo } from './../models/todo.model';
/**
 * This component is the responsable of the todo's list management.
*/
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { selectAllTodos } from '../../../store/index';

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
    // this.todos$ = this.store.select(selectAllTodos);

    // this.store.select('entities').subscribe(entities => {
    //   this.todos$ = entities;
    //   console.log(entities);
    // });
    this.store.subscribe( state => {
      console.log(selectAllTodos);
    });

  }

}

