import { IncrementarAction, DecrementarAction } from './store/actions/contador-actions';
import { State } from './store/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as R from 'ramda';
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  contador: number;

  constructor(private store: Store<State>) {
    // this.contador = 10;
    this.store.subscribe(state => {
      this.contador = ;
      // this.contador = state.contador
    });
  }

  ngOnInit() {

  }

  incrementar() {
    // this.contador++;
    const incrementarAction = new IncrementarAction();
    this.store.dispatch(incrementarAction);
  }

  decrementar() {
    // this.contador--;
    const decrementarAction = new DecrementarAction();
    this.store.dispatch(decrementarAction);
  }

  // displayContador(contador) {
  //   this.contador = contador;
  // }
}
