/**
 * Store / middleware / logger
 */

import { AnyAction, Dispatch, Store } from 'redux';

import { RootState } from '../reducer';

// TODO: Implement this functionality
export default (store: Store<RootState, AnyAction>) => (next: Dispatch) => (action: AnyAction) => next(action);
