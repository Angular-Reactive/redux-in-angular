import { State } from './../../../store/state';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as contadorActions from '../../../store/actions/contador-actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  reset() {
    const action = new contadorActions.ResetAction();
    this.store.dispatch(action);
  }
}
