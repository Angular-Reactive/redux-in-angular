/**
 * This component is the responsable of the todo's footer management.
*/
import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../../filter/actions/filter.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // Subscribirme al STATE para saber cuando cambia el valor del filtro
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
    });
  }

  /**
   *
   * @param nuevoFiltro Per aggiornare il valore del filtro aplicado.
   */
  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const action = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(action);
  }

}
