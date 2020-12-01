/**
 * Store / middleware / logger
 */

import { AnyAction, Dispatch, Store } from 'redux';

import { RootState } from '../reducer';

export default (store: Store<RootState, AnyAction>) => (next: Dispatch) => (action: AnyAction) => {

    const startDate = new Date();
    const actionId = startDate.valueOf();

    console.debug(`[STORE][LOGGER] ${actionId} -  ${new Date().toISOString()} ACTION_DISPATCHED`, action);
    console.debug(`[STORE][LOGGER] ${actionId} -  ${startDate.toISOString()} CURRENT_STATE`, store.getState());
    const result = next(action);
    console.debug(`[STORE][LOGGER] ${actionId} -  ${startDate.toISOString()} UPDATED_STATE`, result);
};
