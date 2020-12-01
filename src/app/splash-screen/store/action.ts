/**
 * App / Splash Screen / Store / Action
 */

import { TIMED_OUT, RESET, SplashScreenActionType } from './action-type';

export const timedOut = (): SplashScreenActionType => ({
    type: TIMED_OUT,
});

export const reset = (): SplashScreenActionType => ({
    type: RESET,
});
