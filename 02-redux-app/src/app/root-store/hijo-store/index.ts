/**
 * This file acts like a "barrel export".
 * We import our store components and alias them before
 * re-exporting them. This in essence is "namespacing"
 * our store components.
 */
import * as HijoStoreActions from './actions';
import * as HijoStoreSelectors from './selectors';
import * as HijoStoreState from './state';

export { HijoStoreModule } from './hijo-store.module';

export { HijoStoreActions, HijoStoreSelectors, HijoStoreState};
