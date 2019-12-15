import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './components/contador/store/contador.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.subscribe(state => {
      this.contador = state.contador;
    });
  }

  incrementar() {
    const action: Action = {
      type: 'INCREMENTAR'
    };

    this.store.dispatch(action);

    // this.contador++;
  }

  decrementar() {
    const action: Action = {
      type: 'DECREMENTAR'
    };

    this.store.dispatch(action);

    // this.contador--;
  }

  displayContador(contador) {
    this.contador = contador;
  }
}
