import { MemoizedSelector, createSelector } from '@ngrx/store';
import { HijoStoreSelectors } from './hijo-store';

/**
 * This file will hold any root state level selectors,
 * such as a Loading property, or even an aggregate
 * Error property.
 */

export const selectContador: MemoizedSelector<object, number> = createSelector(
   HijoStoreSelectors.selectContadorHijo,
   (contadorHijo: number) => {
     return contadorHijo;
   }
);
