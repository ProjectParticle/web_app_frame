/**
 * Frame / Store / Reducer
 */

import { combineReducers } from 'redux';

/**
 * Root State interface
 */

import auth from 'frame/app/auth/store/reducer';
import dashboard from 'frame/app/dashboard/store/reducer';
import splashScreen from 'frame/app/splash-screen/store/reducer';

/* Reducer */
const reducer = combineReducers({
    auth,
    dashboard,
    splashScreen,
});

export default reducer;
export type RootState = ReturnType<typeof reducer>;
