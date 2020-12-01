/**
 * App / Splash Screen / type / reducer
 */

import clone from 'frame/store/util/deep-clone';

import { TIMED_OUT, RESET, SplashScreenActionType } from './action-type';

const initialState = {

    hasBeenShown: false,
};

export type SplashScreenState = Readonly<typeof initialState>;

export default (state: SplashScreenState = initialState, action: SplashScreenActionType): SplashScreenState => {

    switch (action.type) {

        case RESET: {
            return clone(initialState);
        }

        case TIMED_OUT: {
            return clone(state, { hasBeenShown: true });
        }

        default: {
            return state;
        }
    }
};
