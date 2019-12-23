import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../store/state';
import { MultiplicarAction, DividirAction } from '../../../store/actions/contador-actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<State>) {   }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    const action = new MultiplicarAction(2);
    this.store.dispatch(action);
  }

  dividir() {
    const action = new DividirAction(2);
    this.store.dispatch(action);
  }

  displayContador(contador) {
    this.contador = contador;
    // this.cambioContador.emit(this.contador);
  }

}
